const BASE_URL = "/api/v1/";

const API_ROUTES = {
  BRANDS: {
    CREATE_BRAND: `${BASE_URL}brands/create/`,
    GET_BRAND_BY_ID: `${BASE_URL}brands/:id/`,
    GET_BRANDS: `${BASE_URL}brands/`,
  },
};

export default API_ROUTES;
