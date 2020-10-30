import { mockProductsList } from "../schemas/__mocks__/product.schema";

export const ProductsService = {
  findAllProducts: jest.fn(() => mockProductsList)
};