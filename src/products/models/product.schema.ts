import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  installation_instructions: string;

  @Prop({ required: true })
  product_type: string;

  @Prop({ type: Types.ObjectId, ref: 'Developer' })
  developer: string
}

export const ProductSchema = SchemaFactory.createForClass(Product);