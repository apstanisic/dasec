import Joi from "joi";
import {
  AuthenticationService,
  ItemsService,
} from "../../../next/api/src/services";
import { EndpointContext } from "../../types";
import { addToCartValidator, deleteCartItemValidator } from "./cart-item.dto";
import { CartItem } from "./cart-item.entity";

export class CartService {
  /**
   * Used for accessing data in ds_cart_items table
   */
  private cart: ItemsService = new this.ctx.services.ItemsService(
    "ds_cart_items"
  );
  /**
   * Auth
   */
  private auth: AuthenticationService = new this.ctx.services.AuthenticationService();

  /**
   * @param ctx Context provided by Directus
   */
  constructor(private ctx: EndpointContext) {}

  async getCartItems() {
    const items = (await this.cart.readByQuery({
      filter: { user_id: this.auth.accountability?.user },
    })) as CartItem[];
    return items;
  }

  /**
   * Change quantity of product in cart
   * @param body Request body
   */
  async changeQuantity(body: CartItem) {
    const params = this.validatePayload<CartItem>(body, addToCartValidator);
    const { product_item_id, quantity, user_id } = params;

    // User can only add to it's own cart
    // Do I need user_id at all then?
    this.checkAuth(user_id);

    await this.cart.updateByQuery(
      { quantity },
      { filter: { user_id, product_item_id } }
    );
  }

  /**
   * Add item to cart, or update quantity if exist
   * @param body - Request body
   * @param replaceQuantity - Should quantity be replaced or combined
   */
  async addToCart(
    body: CartItem,
    replaceQuantity = true
  ): Promise<Record<string, any>> {
    const params = this.validatePayload<CartItem>(body, addToCartValidator);
    const { product_item_id, quantity, user_id } = params;

    // User can only add to it's own cart
    // Do I need user_id at all then?
    this.checkAuth(user_id);

    /** @argument - It would be awesome to have generics here */
    const productInCart = await this.cart.readByQuery({
      filter: { user_id, product_item_id },
    });

    /** @argument - If we're filtering it should always return array? */
    if (!Array.isArray(productInCart)) {
      throw new this.ctx.exceptions.ForbiddenException();
    }

    let createdId: string | number;
    if (!productInCart) {
      createdId = await this.cart.create({
        product_item_id,
        quantity,
        user_id,
      });
    } else {
      const newQuantity = replaceQuantity
        ? quantity
        : productInCart[0].quantity + quantity;
      createdId = await this.cart.update(
        { quantity: newQuantity },
        productInCart[0].id as string
      );
    }
    return await this.cart.readSingleton({ filter: { id: createdId } });
  }

  /**
   * Remove product from cart
   * @param body - Request body
   */
  async removeFromCart(body: Record<string, any>): Promise<string | number> {
    const filter = this.validatePayload<{
      user_id: string;
      product_item_id: string;
    }>(body, deleteCartItemValidator);

    this.checkAuth(filter.user_id);
    const deletedIds = await this.cart.deleteByQuery({ filter, limit: 1 });
    if (!deletedIds[0])
      throw new this.ctx.exceptions.ForbiddenException("No item deleted");
    return deletedIds[0];
  }

  /**
   * Validate data
   * @param body Data to be validated
   * @param validator Joi schema instance to be used for validation
   */
  private validatePayload<T = Record<string, any>>(
    body: Record<string, any>,
    validator: Joi.ObjectSchema
  ): T {
    const validParams = addToCartValidator.validate(body, {
      stripUnknown: true,
    });
    if (validParams.error) {
      throw new this.ctx.exceptions.InvalidPayloadException("Invalid params.");
    }
    return validParams.value as T;
  }

  /**
   * Check if provided user id is equal logged in user id
   * @param userId User id
   */
  checkAuth(userId: string) {
    if (this.auth.accountability?.user !== userId) {
      throw new this.ctx.exceptions.ForbiddenException();
    }
  }
}
