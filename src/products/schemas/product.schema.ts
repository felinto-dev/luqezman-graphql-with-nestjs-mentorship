import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Developer } from './developer.schema';

export type ProductDocument = Product & Document;

@ObjectType()
@Schema()
export class Product {
  @Prop({ type: Types.ObjectId, ref: 'Developer' })
  developer: Developer;

  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description?: string;

  @Prop()
  installation_instructions?: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  version: string;

  @Prop({ required: true })
  supportUrl: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);