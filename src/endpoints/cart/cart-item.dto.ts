import Joi from "joi";

export const addToCartValidator = Joi.object({
  user_id: Joi.string().required().uuid(),
  product_item_id: Joi.string().required().uuid(),
  quantity: Joi.number().required().integer().min(1),
});

export const deleteCartItemValidator = Joi.object({
  user_id: Joi.string().required().uuid(),
  product_item_id: Joi.string().required().uuid(),
});
