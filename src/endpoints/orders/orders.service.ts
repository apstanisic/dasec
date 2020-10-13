import { ItemsService } from "../../../next/api/src/services";
import { EndpointContext } from "../../types";
import { CartItem } from "../cart/cart-item.entity";
import { CoreService } from "../core/core.service";
import { Struct } from "../core/types";
import { OrderStatus } from "../order-status/order-status.interface";
import { ProductItem } from "../product-items/product-item.interface";
import { addressValidator } from "./new-order.dto";
import { OrderItem } from "./order-item.interface";
import { Order } from "./order.interface";

export class OrdersService extends CoreService {
  private orderStatusRepo = new ItemsService("ds_order_status");
  private orderItemsRepo = new ItemsService("ds_order_items");
  private cartItemsRepo = new ItemsService("ds_cart_items");
  constructor(ctx: EndpointContext) {
    super(ctx, "ds_orders");
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
    const userId = this.checkAuth();
    // User should pass address, address in db are there only as a helper
    const params = this.validatePayload(body, addressValidator);

    const status = (await this.orderStatusRepo.readSingleton({
      filter: { name: "pending" },
    })) as OrderStatus;

    // @todo Add shipping prices
    const order: Partial<Order> = {
      ...params,
      ordered_at: new Date(),
      status_id: status.id,
      shipping_price: 0,
      // Will be replaced when items are added
      //   items_price: -1,
    };

    const orderId = await this.repository.create(order);

    const cartItems = (await this.cartItemsRepo.readByQuery({
      filter: { user_id: userId },
      // @todo Join with product
      deep: {},
    })) as CartItem[];

    const orderItems = cartItems.map((cartItem) => {
      const product = cartItem.product_item_id as ProductItem;
      const singlePrice = product.discount_price ?? product.regular_price;
      const orderItem: Partial<OrderItem> = {
        discount: 0,
        quantity: cartItem.quantity,
        single_price: singlePrice,
        total_price: cartItem.quantity * singlePrice,
        product_item_id: product.id,
        order_id: orderId,
      };
      return orderItem;
    });
    const savedOrderItems = await this.orderItemsRepo.create(orderItems);
    order.items = savedOrderItems;
    const savedOrder = (await this.repository.readSingleton({
      filter: { id: orderId },
      // join items
    })) as Order;
    return savedOrder;
    // order.this.repository.update({items_price: savedOrderItems.reduce(($1, $2) => $1 + $2});
  }

  /**
   * Attempt to cancel order if possible
   * @param orderId
   */
  async cancelOrder(orderId: string) {
    const order = (await this.repository.readSingleton({
      filter: { id: orderId },
      // Join with order_status
    })) as Order;

    const orderStatus = order.status_id as OrderStatus;
    if (!["pending"].includes(orderStatus.name)) {
      throw new this.ctx.exceptions.ForbiddenException("Order already sent.");
    }

    const cancelStatus = (await this.orderStatusRepo.readSingleton({
      filter: { name: "canceled" },
    })) as OrderStatus;

    const updatedOrder = await this.repository.update(
      { status_id: cancelStatus.id },
      order.id
    );
    return updatedOrder;
  }
}
