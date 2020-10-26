import Joi from 'joi';

export const addressValidator = Joi.object<{
  order_address: string;
  order_city: string;
  order_postal_code: string;
  order_country: string;
  shipping_address: string;
  shipping_postal_code: string;
  shipping_city: string;
  shipping_country: string;
  user_comment: string;
}>({
  order_address: Joi.string().required().max(200),
  order_city: Joi.string().required().max(200),
  order_postal_code: Joi.string().required().max(200),
  order_country: Joi.string().required().max(200),
  shipping_address: Joi.string().required().max(200),
  shipping_postal_code: Joi.string().required().max(200),
  shipping_city: Joi.string().required().max(200),
  shipping_country: Joi.string().required().max(200),
  user_comment: Joi.string().max(1000),
});
