import { Router } from "express";
import API_ROUTES from "../config/api";
import {
  createBrandBodyValidation,
  createBrandController,
} from "../controllers/brands/createBrand";
import {
  getBrandsController,
  getBrandsQueryValidation,
} from "../controllers/brands/getBrands";
import {
  validateBody,
  validateQuery,
} from "../middleware/validation.middleware";

const testRoute = () => {
  const route = Router();

  route.post(
    API_ROUTES.BRANDS.CREATE_BRAND,
    validateBody(createBrandBodyValidation),
    createBrandController
  );

  route.get(
    API_ROUTES.BRANDS.GET_BRANDS,
    validateQuery(getBrandsQueryValidation),
    getBrandsController
  );

  return route;
};

export default testRoute;
