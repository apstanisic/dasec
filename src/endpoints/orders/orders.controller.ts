import { Router } from "express";
import { EndpointContext } from "../../types";
import { OrdersService } from "./orders.service";

export function ordersController(router: Router, context: EndpointContext) {
  const service = new OrdersService(context);

  /**
   * Get all orders
   */
  router.get("/orders", async (req, res) => {
    const allOrders = await service.getItems(req.body);
    return res.json({ data: allOrders });
  });

  /**
   * Create order with data from cart
   * Address data should be in the body
   */
  router.post("/orders", async (req, res) => {
    const items = await service.createOrderFromCart(req.body);
    res.json(items);
  });

  /**
   * Try to cancel order if possible
   */
  router.delete("/orders/:id", async (req, res) => {
    const canceledOrder = await service.cancelOrder(req.params.id);
    res.json({ canceledOrder });
  });
}
