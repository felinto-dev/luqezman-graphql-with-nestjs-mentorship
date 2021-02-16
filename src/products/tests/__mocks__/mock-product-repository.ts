import { mockProductsList } from "../../schemas/__mocks__/product.schema";

export const mockRepository = {
  find: jest.fn(() => ({
    exec: jest.fn(() => mockProductsList),
  }))
};