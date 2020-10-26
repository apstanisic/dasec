import { ExtensionContext } from 'directus/dist/types';
import { Router } from 'express';
import { cartController } from './cart/cart.controller';
import { ordersController } from './orders/orders.controller';

export default function registerEndpoint(router: Router, context: ExtensionContext) {
  router.get('/', (req, res) => res.send('Hello, World!'));
  cartController(router, context);
  ordersController(router, context);
}
