import Joi from "joi";

export const bodyValidation = Joi.object({
  name: Joi.string().strict().required(),
  description: Joi.string().strict().required(),
  address: Joi.string().strict().required(),
  minimumPurchaseAmount: Joi.number().strict().greater(0).required(),
  tags: Joi.array().items(Joi.string().strict().required()).required(),
  products: Joi.array().items(Joi.string().strict().required()).required(),
  coordinates: Joi.object({
    lat: Joi.number().strict().required(),
    lng: Joi.number().strict().required(),
  }).required(),
});
