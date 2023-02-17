import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SuperAccount } from './class/SuperAccount'

console.info("People Account Test")
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
peopleAccount.withdraw(500)
peopleAccount.getBalance()
peopleAccount.withdraw(50)
console.log()

console.info("Company Account Test")
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
companyAccount.withdraw(500)
companyAccount.getBalance()
companyAccount.withdraw(50)
companyAccount.getLoan(1000)
companyAccount.getBalance()
console.log()

console.info("Super Account Test")
const superAccount: SuperAccount = new SuperAccount('Super', 30)
superAccount.getBalance()
superAccount.deposit(1000)
superAccount.withdraw(500)
superAccount.getBalance()
superAccount.withdraw(50)
superAccount.getBalance()
