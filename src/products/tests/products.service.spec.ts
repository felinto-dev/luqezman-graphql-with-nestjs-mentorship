import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

import { ProductsService } from '../products.service';
import { mockProductsList } from '../schemas/__mocks__/product.schema';
import { mockRepository } from './__mocks__/mock-product-repository';

jest.unmock('../products.service')

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
      const products = await service.findAllProducts()

      expect(products).toBe(mockProductsList)
    })
  })
});
