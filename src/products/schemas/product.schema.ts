import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { ProductType } from '../interfaces/product-type.enum';
import { Developer } from './developer.schema';

export type ProductDocument = Product & Document;

@ObjectType()
@Schema()
export class Product {
  @Prop({ required: true, type: Types.ObjectId, ref: 'Developer' })
  @Field(type => [Developer])
  developer: Developer;

  @Field(type => String)
  @Prop({ required: true, unique: true })
  name: string;

  @Field(type => String)
  @Prop()
  description?: string;

  @Field(type => String)
  @Prop()
  installation_instructions?: string;

  @Field(type => ProductType)
  @Prop({ type: String, enum: [ProductType.PLUGIN, ProductType.THEME, ProductType.ELEMENTOR_TEMPLATE], required: true })
  type: ProductType;

  @Field(type => String)
  @Prop({ required: true })
  version: string;

  @Field(type => String)
  @Prop({ required: true })
  supportUrl: string;
}

registerEnumType(ProductType, {
  name: 'ProductType',
});

export const ProductSchema = SchemaFactory.createForClass(Product);