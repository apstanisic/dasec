import { ExtensionContext } from 'directus/dist/types';
import { Request } from 'express';
import { CartItem } from '../cart/cart-item.interface';
import { DataService } from '../core/data.service';
import { Struct } from '../core/types';
import { OrderStatus, OrderStatusValues } from '../order-status/order-status.interface';
import { addressValidator } from './new-order.dto';
import { OrderItem } from './order-item.interface';
import { Order } from './order.interface';

export class OrdersService extends DataService<Order> {
  private orderStatusRepo = new DataService<OrderStatus>('ds_order_status', this.getConParams());
  private orderItemsRepo = new DataService<OrderItem>('ds_order_items', this.getConParams());
  private cartItemsRepo = new DataService<CartItem>('ds_cart_items', this.getConParams());

  constructor(req: Request, ctx: ExtensionContext) {
    super('ds_orders', { req, ctx });
  }

  /**
   * Create order from all items in cart
   * Address data should be sent in body, order does not have concept
   * of address table, it just have address data. That way if user
   * changes address, same address will be used for this order.
   * @todo make shipping price configurable
   * @param body Request body
   */
  async createOrderFromCart(body: Struct): Promise<Order> {
    const userId = this.userId;
    // User should pass address, address in db are there only as a helper
    const params = this.validatePayload(body, addressValidator);
    const status = await this.orderStatusRepo.findOneOrFail({
      filter: { name: 'pending' },
    });

    // @todo Add shipping prices
    const order: Partial<Order> = {
      ...params,
      ordered_at: new Date(),
      status_id: status.id,
      shipping_price: 0,
    };

    // const orderId = await this.items.create(order);
    const savedOrder = await this.createItem(order);

    const cartItems = await this.cartItemsRepo.find({
      filter: { user_id: userId },
      fields: ['*', 'product_item_id.*'],
    });

    const orderItems = cartItems.map((cartItem) => {
      if (typeof cartItem.product_item_id === 'string') throw new Error();
      const product = cartItem.product_item_id;
      const singlePrice = product.discount_price ?? product.regular_price;
      const orderItem: Partial<OrderItem> = {
        discount: 0,
        quantity: cartItem.quantity,
        single_price: singlePrice,
        total_price: cartItem.quantity * singlePrice,
        product_item_id: product.id,
        order_id: savedOrder.id,
      };
      return orderItem;
    });
    const savedOrderItems = await this.orderItemsRepo.createItems(orderItems);
    savedOrder.items = savedOrderItems;
    return savedOrder;
    // order.this.repository.update({items_price: savedOrderItems.reduce(($1, $2) => $1 + $2});
  }

  /**
   * Attempt to cancel order if possible
   * @param orderId
   */
  async cancelOrder(orderId: string) {
    const order = await this.findOneOrFail(orderId);

    const allOrderStatus = await this.orderStatusRepo.find();
    const pending = allOrderStatus.find((os) => os.name === OrderStatusValues.pending);
    const canceled = allOrderStatus.find((os) => os.name === OrderStatusValues.cancelled);
    if (!pending || !canceled) throw new this.exceptions.ForbiddenException();

    if (order.status_id !== pending.id) {
      throw new this.ctx.exceptions.ForbiddenException("It's to late to cancel order.");
    }

    const updatedOrder = await this.updateById(order.id, { status_id: canceled.id });
    return updatedOrder;
  }
}
