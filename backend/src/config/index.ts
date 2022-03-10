import dotenv from "dotenv";

dotenv.config();

const CONFIG = {
  PORT: process.env.PORT ?? 3040,
  MONGO_DB_URL: process.env.MONGO_DB_URL ?? "",
};

export default CONFIG;
