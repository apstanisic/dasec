import type { ExtensionContext, PrimaryKey } from 'directus/dist/types';
import { Request } from 'express';
import Joi from 'joi';
import { DataService } from '../core/data.service';
import { Struct } from '../core/types';
import { addToCartValidator } from './cart-item.dto';
import { CartItem } from './cart-item.interface';

export class CartService extends DataService<CartItem> {
  constructor(req: Request, ctx: ExtensionContext) {
    super('ds_cart_items', { req, ctx });
  }

  /**
   * Get all products in cart
   * @todo This only returns cart item without product, I'm not sure if join works
   */
  async getCartItems() {
    // I think this will join with products, but I'm not sure if it'll work
    // First of all there is no relation set up in Directus, only in DB
    const items = await this.find({
      filter: { user_id: this.userId },
      fields: ['*', 'product_item_id.*'],
    });

    return items;
  }

  /**
   * Change quantity of product in cart
   * @param body Request body
   */
  async replaceQuantity(body: Struct): Promise<CartItem | null> {
    const userId = this.userId;
    const params = this.validatePayload(body, addToCartValidator);
    const { product_item_id, quantity } = params;

    const updatedValues = await this.updateWhere(
      { filter: { user_id: userId, product_item_id } },
      { quantity },
    );
    return updatedValues[0] ?? null;
  }

  /**
   * Add item to cart, or update quantity if exist
   * If product is already in the cart, combine quantities
   * @param body - Request body
   */
  async addProductToCart(body: Struct): Promise<CartItem> {
    const userId = this.userId;
    const params = this.validatePayload(body, addToCartValidator);
    const { product_item_id, quantity } = params;

    const productInCart = await this.findOne({
      filter: {
        user_id: userId,
        product_item_id,
      },
    });

    let createdItem: CartItem;
    if (!productInCart) {
      createdItem = await this.createItem({
        product_item_id,
        quantity,
        user_id: userId,
      });
    } else {
      const newQuantity = productInCart.quantity + quantity;
      createdItem = await this.updateById(productInCart.id, {
        quantity: newQuantity,
      });
    }
    return createdItem;
  }

  /**
   * Remove product from cart
   * @param cartItemId Cart item id to delete
   */
  async removeFromCart(cartItemId: string): Promise<PrimaryKey> {
    const userId = this.userId;
    const validId = Joi.string().required().uuid().validate(cartItemId);

    const cartItem: Partial<CartItem> = {
      user_id: userId,
      id: validId.value,
    };

    const deletedIds = await this.items.deleteByQuery({
      filter: cartItem,
    });
    if (!deletedIds[0]) {
      throw new this.ctx.exceptions.ForbiddenException('There is no this item in cart.');
    }

    return deletedIds[0];
  }
}
