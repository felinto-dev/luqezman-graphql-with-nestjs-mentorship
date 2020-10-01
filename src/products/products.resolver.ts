import { Resolver, Query } from '@nestjs/graphql';
import { Product } from './models/product.schema';
import { ProductsService } from './products.service';

@Resolver('Products')
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) { }

  @Query(() => [Product])
  async users(): Promise<Product[]> {
    return await this.productsService.findAllProducts();
  }
}
