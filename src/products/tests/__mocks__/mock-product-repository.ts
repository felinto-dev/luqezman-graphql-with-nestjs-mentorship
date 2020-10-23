import { mockProductsList } from "./mock-product";

export const mockRepository = {
  find: jest.fn(() => ({
    exec: jest.fn(() => mockProductsList),
  }))
};