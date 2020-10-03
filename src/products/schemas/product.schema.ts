import { ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { ProductType } from '../interfaces/product-type.enum';
import { Developer } from './developer.schema';

export type ProductDocument = Product & Document;

@ObjectType()
@Schema()
export class Product {
  @Prop({ required: true, type: Types.ObjectId, ref: 'Developer' })
  developer: Developer;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description?: string;

  @Prop()
  installation_instructions?: string;

  @Prop({ type: String, enum: [ProductType.PLUGIN, ProductType.THEME, ProductType.ELEMENTOR_TEMPLATE], required: true })
  type: ProductType;

  @Prop({ required: true })
  version: string;

  @Prop({ required: true })
  supportUrl: string;
}

registerEnumType(ProductType, {
  name: 'ProductType',
});

export const ProductSchema = SchemaFactory.createForClass(Product);