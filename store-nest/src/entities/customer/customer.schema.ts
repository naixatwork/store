import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Package } from '../package/package.schema';
import { Document } from 'mongoose';

@Schema()
export class Customer {
  @Prop()
  id: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop([Package])
  purchases: Package[];
}

export type CustomerDocument = Customer & Document;
export const CustomerSchema = SchemaFactory.createForClass(Customer);
