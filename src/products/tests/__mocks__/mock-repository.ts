import { mockProductsList } from "./mock-product";

export const mockRepository = {
  find: jest.fn().mockImplementation(() => ({
    exec: jest.fn().mockReturnValue(mockProductsList),
  }))
};