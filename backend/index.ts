import express from "express";
import CONFIG from "./src/config";
import expressLoader from "./src/loaders/express.loader";
import mongooseLoader from "./src/loaders/mongoose.loader";

const startServer = () => {
  const app = express();

  expressLoader(app);
  mongooseLoader();

  app.listen(CONFIG.PORT, () => {
    console.log(`[*] Server has started on port ${CONFIG.PORT}`);
  });
};

startServer();
