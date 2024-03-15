import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {

    constructor(userName: string, accountNumber: number){
        super(userName, accountNumber)
    }

    depositPeopleAccount (moneyIn: number): void { // Deposito normal + 10 (alteração pedida pelo site...)
        this.deposit(10 + moneyIn)
    }
}