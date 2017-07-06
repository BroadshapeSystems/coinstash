import { IWalletRepository } from '../domain/domain';
import { WalletRepository } from '../infrastructure/repositories/repositories';

export const dependencies = [{ provide: IWalletRepository, useClass: WalletRepository }]
