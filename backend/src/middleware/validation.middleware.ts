import { RequestHandler } from "express";
import Joi from "joi";

type ValidateMiddleware = (
  validationSchema: Joi.ObjectSchema<any>
) => RequestHandler;

export const validateBody: ValidateMiddleware =
  (validationSchema) => async (req, _res, next) => {
    try {
      await validationSchema.validateAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  };

export const validateQuery: ValidateMiddleware =
  (validationSchema) => async (req, _res, next) => {
    try {
      await validationSchema.validateAsync(req.query);
      next();
    } catch (error) {
      next(error);
    }
  };
