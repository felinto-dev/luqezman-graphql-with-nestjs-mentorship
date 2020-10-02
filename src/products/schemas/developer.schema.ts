import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeveloperDocument = Developer & Document;

@ObjectType()
@Schema()
export class Developer {
  @Field(type => String)
  @Prop({ required: true })
  name: string;

  @Field(type => String)
  @Prop()
  description?: string;

  @Field(type => String)
  @Prop()
  setup?: string;

  @Field(type => String)
  @Prop()
  website?: string;
}

export const DeveloperSchema = SchemaFactory.createForClass(Developer);