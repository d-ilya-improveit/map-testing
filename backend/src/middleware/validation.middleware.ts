import { RequestHandler } from "express";
import Joi from "joi";
import ResponseService from "../utils/ResponseService";

type ValidateMiddleware = (
  validationSchema: Joi.ObjectSchema<any>
) => RequestHandler;

export const validateBody: ValidateMiddleware =
  (validationSchema) => async (req, res, next) => {
    try {
      await validationSchema.validateAsync(req.body);
      next();
    } catch (error: any) {
      return ResponseService.error(res, 400, error.message);
    }
  };

export const validateQuery: ValidateMiddleware =
  (validationSchema) => async (req, res, next) => {
    try {
      await validationSchema.validateAsync(req.query);
      next();
    } catch (error: any) {
      return ResponseService.error(res, 400, error.message);
    }
  };
