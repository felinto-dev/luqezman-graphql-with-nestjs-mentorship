import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { ProductsService } from '../products.service';
import { mockProductsList } from './__mocks__/mock-product';
import { mockRepository } from './__mocks__/mock-product-repository';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getModelToken('Product'),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll()', () => {
    it('should find all elements from database', async () => {
      const products = service.findAllProducts()

      expect(products).resolves.toBe(mockProductsList)
    })
  })
});
