import { ErrorRequestHandler } from "express";
import ResponseService from "../utils/ResponseService";

const errorHandlerMiddleware: ErrorRequestHandler = async (
  err,
  _req,
  res,
  _next
) => {
  ResponseService.error(res, err.status, err.message);
};

export default errorHandlerMiddleware;
