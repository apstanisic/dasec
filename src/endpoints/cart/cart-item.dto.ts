import Joi from "joi";

export const addToCartValidator = Joi.object<{
  product_item_id: string;
  quantity: number;
}>({
  product_item_id: Joi.string().required().uuid(),
  quantity: Joi.number().required().integer().min(1),
});
