import { mockProductsList } from "../tests/__mocks__/mock-product";

export const mockService = {
  findAllProducts: jest.fn(() => mockProductsList)
};