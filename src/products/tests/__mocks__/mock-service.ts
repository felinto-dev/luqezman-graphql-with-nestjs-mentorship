import { mockProductsList } from "./mock-product";

export const mockService = {
  findAllProducts: jest.fn().mockReturnValueOnce(mockProductsList)
};