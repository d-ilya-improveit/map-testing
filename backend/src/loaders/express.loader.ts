import express, { Express } from "express";
import errorHandlerMiddleware from "../middleware/errorHandler.middleware";
import corsMiddleware from "../middleware/cors.middleware";
import routes from "../routes";

export default (app: Express) => {
  app.use(corsMiddleware);
  app.use(express.json());

  routes(app);

  app.use(errorHandlerMiddleware);

  console.log("[*] Express framework is loaded");
};
