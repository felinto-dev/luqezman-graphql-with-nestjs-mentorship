import { Test, TestingModule } from '@nestjs/testing';

import { ProductsResolver } from '../products.resolver';
import { ProductsService } from '../products.service';
import { mockProductsList } from './__mocks__/mock-product';
import { mockService } from '../__mocks__/product.service';

describe('ProductsResolver', () => {
  let resolver: ProductsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsResolver,
        {
          provide: ProductsService,
          useValue: mockService
        }
      ],
    }).compile();

    resolver = module.get<ProductsResolver>(ProductsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('@Query products', () => {
    it('should get an array of products', async () => {
      const products = resolver.products()

      expect(products).resolves.toBe(mockProductsList)
    })
  })
});
