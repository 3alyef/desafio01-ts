import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    private canGetLoan: boolean // usuário tem permissão para credito?
    private loan: number; // valor já emprestado
    private isOnLoan: boolean; // se ja tem um emprestimo ativo
    private creditLimit: number // limite de credito

    constructor(userName: string, accountNumber: number){
        super(userName, accountNumber)
        this.canGetLoan = true
        this.loan = 0
        this.isOnLoan = false
        this.creditLimit = 5000
    };

    getLoan(value: number): void {
        if(this.canGetLoan){
            if(this.isOnLoan){
                if((this.creditLimit - this.loan) < value){
                    throw new Error(`Credit denied! \n Loan requested is above the available limit. \n Total available for loan: $${this.creditLimit - this.loan} \n Total already borrowed: $${this.loan}`)
                } else {
                    this.loan += value
                    this.deposit(value) // deposita o valor do emprestimo na conta 
                }
            } else {
                if(this.creditLimit >= value){
                    this.loan += value
                    this.deposit(value) // deposita o valor do emprestimo na conta      
                } else {
                    throw new Error(`Credit denied! \n Loan requested is above the available limit. \n Total available for loan: $${this.creditLimit - this.loan}`)
                }
            }
            return
        };
        

        throw new Error('Credit unavailable...')

    }


}