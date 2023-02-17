import { DioAccount } from "./DioAccount"

export class SuperAccount extends DioAccount {
  private readonly _bonus: number = 10

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
    this._bonus = 10
  }

  deposit: (value: number) => void = (value: number): void => {
    let total = value + this._bonus
    if (this.addBalance(total)) {
      console.log(`Voce depositou ${total} reais e seu saldo atual é ${this.getBalance()} reais`)
    }
  }
}