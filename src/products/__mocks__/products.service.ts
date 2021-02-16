import { mockProductsList } from "../schemas/__mocks__/product.schema";

export class ProductsService {
  findAllProducts = jest.fn(() => mockProductsList);
}

export default ProductsService