import { Router } from "express";
import productController from "./controllers/product-controller";
import { authenticateSeller } from "app/middlewares/authanticate-seller";

const productRouter = Router();

productRouter.get("/", productController.getAll.bind(productController));

productRouter.get("/:id", productController.getById.bind(productController));

productRouter.post(
  "/",
  authenticateSeller,
  productController.create.bind(productController),
);

productRouter.put(
  "/:id",
  authenticateSeller,
  productController.update.bind(productController),
);

productRouter.delete(
  "/:id",
  authenticateSeller,
  productController.delete.bind(productController),
);

export default productRouter;
