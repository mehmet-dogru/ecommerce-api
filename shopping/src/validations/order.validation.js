const Joi = require("joi");

const productSchema = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string(),
  desc: Joi.string(),
  banner: Joi.string(),
  type: Joi.string(),
  unit: Joi.number(),
  price: Joi.number(),
  supplier: Joi.string(),
});

const itemsSchema = Joi.array().items(
  Joi.object({
    product: productSchema.required(),
    unit: Joi.number().required(),
  })
);

const orderSchema = Joi.object({
  orderId: Joi.string(),
  customerId: Joi.string(),
  amount: Joi.number(),
  status: Joi.string(),
  items: itemsSchema.required(),
});

module.exports = orderSchema;
