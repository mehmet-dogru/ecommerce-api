const Joi = require("joi");

const createSchema = Joi.object().keys({
  name: Joi.string(),
  desc: Joi.string(),
  banner: Joi.string(),
  type: Joi.string(),
  unit: Joi.number(),
  price: Joi.number(),
  available: Joi.boolean(),
  suplier: Joi.string(),
});

module.exports = { createSchema };
