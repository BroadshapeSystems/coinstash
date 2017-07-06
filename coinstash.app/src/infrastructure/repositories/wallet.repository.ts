import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Wallet } from '../../domain/model/Wallet';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import "rxjs/add/observable/from"
import { IWalletRepository } from "../../domain/repository/wallet.repository.interface"
import { APP_CONFIG, AppConfig } from '../../app/app.config';

@Injectable()
export class WalletRepository extends IWalletRepository {

    constructor(private http: Http, @Inject(APP_CONFIG) private config: AppConfig) {
        super();
    }

    getWallets(): Observable<Wallet[]> {
        return this.http.get(this.config.allWalletsUrl).map(response => response.json().wallet);
    }
    getWalletById(id: number): Observable<Wallet[]> {
        return this.http.get(this.config.allWalletsUrl).map(response => response.json().find(lg => lg.id == id));
    }
}