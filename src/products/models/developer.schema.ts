import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeveloperDocument = Developer & Document;

@Schema()
export class Developer {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  installation_instructions: string;
}

export const DeveloperSchema = SchemaFactory.createForClass(Developer);