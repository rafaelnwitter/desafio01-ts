import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.addBalance(value)) {
      console.log(`Emprestimo concedido no valor de ${value}.`)
    } else console.log('Emprestimo negado')
  }
}
