import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema({ timestamps: true })
export class Book extends Document {
  @Prop()
  image: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  description?: string;

  @Prop({ required: true, default: 0 })
  quantity: number;

  @Prop({ default: false })
  isBlocked: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);
