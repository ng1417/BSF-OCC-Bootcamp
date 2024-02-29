//encapsulation

class bankAccount{
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    
    }

    withdrawal(amount){
        if (amount<=this.balance) {
            this.balance -= amount;
        } else {
            console.log('Insufficient funds');
        }
    }

    getAccountInfo() {
        return (`Your account number is ${this.accountNumber}, 
        your balance is ${this.balance}`)
    }
}

const myAccount = new bankAccount('123456789', 1000);
const regelAccount = new bankAccount('987765544', 6000);

regelAccount.deposit(500);
regelAccount.withdrawal(7000)
myAccount.deposit(10000);

console.log(regelAccount.getAccountInfo());
console.log(myAccount.getAccountInfo());