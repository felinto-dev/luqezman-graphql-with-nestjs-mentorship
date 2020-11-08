import { Test, TestingModule } from '@nestjs/testing';

import { ProductsResolver } from '../products.resolver';
import { ProductsService } from '../products.service';
import { mockProductsList } from '../schemas/__mocks__/product.schema';

jest.mock('../products.service')

describe('ProductsResolver', () => {
  let resolver: ProductsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsResolver,
        ProductsService,
      ],
    }).compile();

    resolver = module.get<ProductsResolver>(ProductsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('@Query products', () => {
    it('should get an array of products', async () => {
      const products = await resolver.products()

      expect(products).toBe(mockProductsList)
    })
  })
});
