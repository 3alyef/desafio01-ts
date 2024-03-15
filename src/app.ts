import { PeopleAccount, CompanyAccount } from "./classes/accounts";

const user1 = new CompanyAccount('Alef', 19194867);

const user2 = new PeopleAccount('Maya', 967948);

const user3 = new CompanyAccount('Naama', 148967);

console.log(user1);
user1.deposit(80);
user1.getBalance();
user1.getLoan(2500);
console.log(user1);
user1.withdraw(2000);
console.log(user1);
console.log(user2);
user2.depositPeopleAccount(200);
console.log(user2);
console.log(user3)