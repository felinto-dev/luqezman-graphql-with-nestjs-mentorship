import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { Product, ProductSchema } from './models/product.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  providers: [ProductsService, ProductsResolver]
})
export class ProductsModule { }
