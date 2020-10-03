import { ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeveloperDocument = Developer & Document;

@ObjectType()
@Schema()
export class Developer {
  @Prop({ required: true })
  name: string;

  @Prop()
  description?: string;

  @Prop()
  setup?: string;

  @Prop()
  website?: string;
}

export const DeveloperSchema = SchemaFactory.createForClass(Developer);