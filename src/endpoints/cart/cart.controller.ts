import type { ExtensionContext } from 'directus/dist/types';
import { Request, Router } from 'express';
import { CartService } from './cart.service';

export function cartController(router: Router, ctx: ExtensionContext) {
  /**
   * Removes some boilerplace
   * @param req Express request
   */
  const service = (req: Request) => new CartService(req, ctx);
  /**
   * Get all products from a cart
   */
  router.get('/cart', async (req, res) => {
    const items = await service(req).getCartItems();
    res.json(items);
  });

  /**
   * Add product to cart
   */
  router.post('/cart', async (req, res) => {
    const cartItem = await service(req).addProductToCart(req.body);
    return res.json(cartItem);
  });

  /**
   * Change quantity
   */
  router.patch('/cart/:id', async (req, res) => {
    const primaryKeys = await service(req).replaceQuantity(req.body);
    return res.json({ data: primaryKeys });
  });

  /**
   * Remove product from cart
   */
  router.delete('/cart/:id', async (req, res) => {
    const id = await service(req).removeFromCart(req.params.id);
    res.json({ id });
  });
}
