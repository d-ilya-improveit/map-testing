import CONFIG from ".";

const { BASE_URL } = CONFIG;

const API_ROUTES = {
  BRANDS: {
    CREATE_BRAND: `${BASE_URL}brands/create/`,
    GET_BRANDS: `${BASE_URL}brands/`,
  },
};

export default API_ROUTES;
