import appConfig from "../../config/app";
import express from "express";
import db from "app/general/database/connection-database";
import userController from "app/users/controllers/user-controller";
import userRouter from "app/users/routes";
import productRouter from "app/products/routes";
import morgan from "morgan";
import productRepository from "app/products/repositories/product-repository";

export default async function startApplication() {
  try {
    // Express application
    const app = express();

    // Middlewares
    app.use(express.json());

    // Logger middleware
    app.use(morgan("combined")); // Use the combined format for logging

    // Database connection
    await db.authenticate();

    /**
     * Routes
     */
    app.use("/users", userRouter);
    app.use("/products", productRouter);
    app.post("/deposit", userController.deposit.bind(userController));
    app.post("/buy", userController.buy.bind(userController));
    app.patch("/reset", userController.resetDeposit.bind(userController));

    // Start server
    app.listen(appConfig.get("app.port"), () => {
      console.log(`Server is running on port ${appConfig.get("app.port")}`);
    });
  } catch (error: Error | any) {
    console.log(error.message);
    throw error;
  }
}
