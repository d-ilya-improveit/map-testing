import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3040/api/v1/",
});

export default API;
