import { Router } from "express";

export function cartController(router: Router, context: any) {
  router.post("/cart", (req, res) => res.send("test"));
  router.get("/cart", (req, res) => res.send("test"));
}

function addToCart({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) {}
