import type { ExtensionContext } from 'directus/dist/types';
import { Request, Router } from 'express';
import { OrdersService } from './orders.service';

export function ordersController(router: Router, ctx: ExtensionContext) {
  /**
   * Removes some boilerplace
   * @param req Express request
   */
  const service = (req: Request) => new OrdersService(req, ctx);

  /**
   * Get all orders
   */
  router.get('/orders', async (req, res) => {
    const allOrders = await service(req).find({});
    return res.json({ data: allOrders });
  });

  /**
   * Create order with data from cart
   * Address data should be in the body
   */
  router.post('/orders', async (req, res) => {
    const items = await service(req).createOrderFromCart(req.body);
    res.json(items);
  });

  /**
   * Try to cancel order if possible
   */
  router.delete('/orders/:id', async (req, res) => {
    const canceledOrder = await service(req).cancelOrder(req.params.id);
    res.json(canceledOrder);
  });
}
