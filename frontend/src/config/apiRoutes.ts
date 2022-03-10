import { GetBrandsQuery } from "../types/brands";

const API_ROUTES = {
  BRANDS: {
    CREATE_BRAND: "brands/create/",
    GET_BRANDS: (data: GetBrandsQuery) =>
      `brands/?latStart=${data.latStart}&lngStart=${data.lngStart}&latEnd=${data.latEnd}&lngEnd=${data.lngEnd}`,
  },
};

export default API_ROUTES;
