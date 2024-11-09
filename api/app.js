import express from "express";
import userRoutes from "./routes/userRoutes.js";

function createApp(config) {
  const app = express();

  app.use((req, res, next) => {
    req.repository = config.repository;
    next();
  });

  app.use(express.json());
  app.use("/api/users", userRoutes);
  return app;
}
export default createApp;
