import Repository from "app/general/repository/repository";
import Product from "../model/product";

class ProductRepository extends Repository {
  //
}

const productRepository = new ProductRepository(Product);

export default productRepository;
