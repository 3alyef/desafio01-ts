export abstract class DioAccount {
    private status: boolean;
    private userName: string;
    private balance: number;
    public readonly accountNumber: number;

    constructor(userName: string, accountNumber: number){
        this.status = true;
        this.userName = userName;
        this.balance = 10;
        this.accountNumber = accountNumber // need a DataBase to create a new random account number (so that it doesn't happen again)
    };

    deposit(moneyIn: number): void {
        if(this.status){
            this.balance += moneyIn
            console.log('Deposit made successfully!')
            return
        };

        throw new Error('Non-existent or deactivated account')
    };

    getBalance (): void {
        console.log(`Current balance $${this.balance}`)
    }

    withdraw(moneyOut: number): void {
        if(this.status){
            if(this.balance <= 10){
                throw new Error('Invalid Operation: Minimum balance in the account must be R$10')
            };
            if(this.balance > moneyOut){
                this.balance -= moneyOut;
                console.log(`Operation carried out successfully! \n New balance: R$${this.balance}`)
                
            }
            return
        };

        throw new Error('Non-existent or deactivated account')
    }


}