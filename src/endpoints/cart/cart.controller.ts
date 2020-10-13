import { Router } from "express";
import { EndpointContext } from "../../types";
import { CartService } from "./cart.service";

export function cartController(router: Router, context: EndpointContext) {
  const service = new CartService(context);

  /**
   * Get all products from a cart
   */
  router.get("/cart", async (_, res) => {
    const items = service.getCartItems();
    res.json(items);
  });

  /**
   * Add product to cart
   */
  router.post("/cart", async (req, res) => {
    const cartItem = await service.addProductToCart(req.body);
    return res.json(cartItem);
  });

  /**
   * Change quantity
   */
  router.patch("/cart/:id", async (req, res) => {
    const primaryKeys = await service.replaceQuantity(req.body);
    return res.json({ data: primaryKeys });
  });

  /**
   * Remove product from cart
   */
  router.delete("/cart/:id", async (req, res) => {
    req.params.id;
    const id = await service.removeFromCart(req.params.id);
    res.json({ id });
  });
}
