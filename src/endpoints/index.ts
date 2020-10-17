import { ExtensionContext } from "directus/dist/types";
import { Router } from "express";
import { cartController } from "./cart/cart.controller";

export function registerEndpoint(router: Router, context: ExtensionContext) {
  router.get("/", (req, res) => res.send("Hello, World!"));
  cartController(router, context);
  // router.use(new NestJS)
}
