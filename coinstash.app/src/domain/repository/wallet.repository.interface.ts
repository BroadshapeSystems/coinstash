import { Wallet } from '../../domain/model/Wallet'
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from"

export abstract class IWalletRepository {
    abstract getWallets(): Observable<Array<Wallet>>
    abstract getWalletById(id: number): Observable<Array<Wallet>>
}