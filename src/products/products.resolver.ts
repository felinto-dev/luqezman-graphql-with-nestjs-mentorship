import { Resolver, Query } from '@nestjs/graphql';

import { Product } from './schemas/product.schema';
import { ProductsService } from './products.service';

@Resolver('Products')
export class ProductsResolver {
  constructor(
    private readonly productsService: ProductsService
  ) { }

  @Query(() => [Product])
  async products(): Promise<Product[]> {
    return this.productsService.findAllProducts();
  }
}
