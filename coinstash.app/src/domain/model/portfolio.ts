import { Wallet } from "domain/model/Wallet";

export class Portfolio {
    constructor(public name: string, public wallets: Array<Wallet>){

    }
}