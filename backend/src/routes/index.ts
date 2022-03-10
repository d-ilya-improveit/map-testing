import { Express } from "express";
import brandsRoute from "./brands.route";

export default (app: Express) => {
  app.use(brandsRoute());
};
