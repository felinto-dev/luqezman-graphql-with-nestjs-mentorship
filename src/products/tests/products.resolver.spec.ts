import { Test, TestingModule } from '@nestjs/testing';

import { ProductsResolver } from '../products.resolver';
import { ProductsService } from '../products.service';
import { mockProductsList } from './mocks/mock-product';

describe('ProductsResolver', () => {
  let resolver: ProductsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        ProductsResolver,
        {
          provide: ProductsService,
          useValue: {}
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
