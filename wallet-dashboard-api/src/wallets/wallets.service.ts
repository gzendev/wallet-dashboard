import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Wallet } from './entities/wallet.entity';

@Injectable()
export class WalletsService {
  constructor(
    @InjectModel('Wallet') private readonly walletModel: Model<Wallet>,
  ) {}

  async create(wallet: Wallet): Promise<Wallet> {
    const newWallet = new this.walletModel(wallet);
    return await newWallet.save();
  }

  async findAll(): Promise<Wallet[]> {
    return await this.walletModel.find();
  }

  async findOne(id: string): Promise<Wallet> {
    return await this.walletModel.findOne({ _id: id });
  }

  async update(id: string, wallet: Wallet): Promise<Wallet> {
    return await this.walletModel.findByIdAndUpdate(id, wallet, { new: true });
  }

  async delete(id: string) {
    return await this.walletModel.findByIdAndDelete(id);
  }

  async findAllByUser(user: string): Promise<Wallet[]> {
    return await this.walletModel.find({ user });
  }
}
