import Joi from "joi";

export const queryValidation = Joi.object({
  latStart: Joi.number().required(),
  lngStart: Joi.number().required(),
  latEnd: Joi.number().required(),
  lngEnd: Joi.number().required(),
});
