import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WalletDocument = HydratedDocument<Wallet>;

@Schema()
export class Wallet {
  @Prop()
  address: string;

  @Prop()
  isFavorite: boolean;

  @Prop()
  isOld: boolean;

  @Prop()
  user: string;

  @Prop()
  balance: string;
}

export const WalletSchema = SchemaFactory.createForClass(Wallet);
