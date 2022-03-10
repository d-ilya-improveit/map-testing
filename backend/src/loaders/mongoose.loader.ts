import mongoose from "mongoose";
import CONFIG from "../config";

export default () => {
  mongoose.connect(CONFIG.MONGO_DB_URL).then(() => {
    console.log("[*] MongoDB database is connected");
  });
};
