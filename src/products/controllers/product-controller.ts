import { Controller } from "app/general/controller/controller";
import productRepository from "../repositories/product-repository";

class ProductController extends Controller {
  //
}

const productController = new ProductController(productRepository);

export default productController;
