import Joi from "joi";
import { EndpointContext } from "../../types";
import { CoreService } from "../core/core.service";
import { Struct } from "../core/types";
import { addToCartValidator } from "./cart-item.dto";
import { CartItem } from "./cart-item.entity";

export class CartService extends CoreService {
  /**
   * @param ctx Context provided by Directus
   */
  constructor(ctx: EndpointContext) {
    super(ctx, "ds_cart_items");
  }

  /**
   * Get all products in cart
   * @todo This only returns ids, see how can you join in ItemsService
   */
  async getCartItems() {
    const items = (await this.repository.readByQuery({
      filter: { user_id: this.auth.accountability?.user },
      // Join with products
    })) as CartItem[];
    return items;
  }

  /**
   * Change quantity of product in cart
   * @param body Request body
   */
  async replaceQuantity(body: Struct): Promise<(string | number)[]> {
    const userId = this.checkAuth();
    const params = this.validatePayload(body, addToCartValidator);
    const { product_item_id, quantity } = params;

    return await this.repository.updateByQuery(
      { quantity },
      { filter: { user_id: userId, product_item_id } }
    );
  }

  /**
   * Add item to cart, or update quantity if exist
   * If product is already in the cart, combine quantities
   * @param body - Request body
   */
  async addProductToCart(body: Struct): Promise<CartItem> {
    const userId = this.checkAuth();
    const params = this.validatePayload(body, addToCartValidator);
    const { product_item_id, quantity } = params;

    const productInCart = await this.repository.readSingleton({
      filter: { user_id: userId, product_item_id },
    });

    let createdItemId: string | number;
    if (!productInCart) {
      createdItemId = await this.repository.create({
        product_item_id,
        quantity,
        user_id: userId,
      });
    } else {
      const newQuantity = productInCart[0].quantity + quantity;
      createdItemId = await this.repository.update(
        { quantity: newQuantity },
        productInCart[0].id as string
      );
    }
    return (await this.repository.readSingleton({
      filter: { id: createdItemId },
    })) as CartItem;
  }

  /**
   * Remove product from cart
   * @param cartItemId Cart item id to delete
   */
  async removeFromCart(cartItemId: string): Promise<string | number> {
    const validId = Joi.string().required().uuid().validate(cartItemId);
    if (!this.auth.accountability?.user)
      throw new this.ctx.exceptions.ForbiddenException();

    const cartItem: Partial<CartItem> = {
      user_id: this.auth.accountability?.user,
      id: validId.value,
    };

    const deletedIds = await this.repository.deleteByQuery({
      filter: cartItem,
    });
    if (!deletedIds[0]) {
      throw new this.ctx.exceptions.ForbiddenException("No item deleted");
    }
    return deletedIds[0];
  }
}
