import { Router } from "express";
import { EndpointContext } from "../../types";
import { CartService } from "./cart.service";

export function cartController(router: Router, context: EndpointContext) {
  const service = new CartService(context);

  router.get("/cart", async (req, res) => {
    const items = service.getCartItems();
    res.json(items);
  });

  /**
   * Add product to cart
   */
  router.post("/cart", async (req, res) => {
    const cartItem = await service.addToCart(req.body);
    return res.json(cartItem);
  });

  /**
   * Remove product from cart
   */
  router.delete("/cart", async (req, res) => {
    const id = await service.removeFromCart(req.body);
    res.json({ id });
  });
}
