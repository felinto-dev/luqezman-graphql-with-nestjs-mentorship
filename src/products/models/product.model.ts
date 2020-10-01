import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Developer } from './developer.model';

export type ProductDocument = Product & Document;

@ObjectType()
@Schema()
export class Product {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description?: string;

  @Prop()
  installation_instructions?: string;

  @Prop({ required: true })
  product_type: string;

  @Prop({ type: Types.ObjectId, ref: 'Developer' })
  developer: Developer
}

export const ProductSchema = SchemaFactory.createForClass(Product);