import dotenv from "dotenv";

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT ?? 3040,
  MONGO_DB_URL: process.env.MONGO_DB_URL ?? "",
  BASE_URL: process.env.BASE_URL ?? "/api/v1/",
};

export default CONFIG;
