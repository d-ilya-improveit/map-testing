import { Express } from "express";
import testRoute from "./brands.route";

export default (app: Express) => {
  app.use(testRoute());
};
