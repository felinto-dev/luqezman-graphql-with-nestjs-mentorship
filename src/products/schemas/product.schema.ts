import { ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { ProductType } from '../types/product-type.enum';
import { Developer } from './developer.schema';

export type ProductDocument = Product & Document;

@ObjectType()
@Schema()
export class Product {
  @Prop({ type: Types.ObjectId, ref: 'Developer', required: true })
  developer: Developer;

  @Prop({ unique: true, required: true })
  name: string;

  @Prop()
  description?: string;

  @Prop()
  installationInstructions?: string;

  @Prop({ type: String, enum: Object.values(ProductType), required: true })
  type: ProductType;

  @Prop({ required: true })
  version: string;

  @Prop({ required: true })
  supportUrl: string;
}

registerEnumType(ProductType, { name: 'ProductType' });

export const ProductSchema = SchemaFactory.createForClass(Product);