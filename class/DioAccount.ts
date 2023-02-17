export abstract class DioAccount {
  private readonly _name: string
  private readonly _accountNumber: number
  private _balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this._name = name
    this._accountNumber = accountNumber
  }

  getName = (): void => {
    console.log(this._name)
  }

  getAccountNumber = (): void => {
    console.log(this._accountNumber)
  }

  addBalance = (value: number): boolean => {
    if (this.validateStatus()) {
      this._balance += value
      return true
    }
    return false
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this._balance += value
      console.log(`Voce depositou ${value} reais e seu saldo atual é ${this._balance} reais`)
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && this._balance >= value) {
      this._balance -= value
      console.log(`Voce sacou ${value} reais e seu saldo atual é ${this._balance} reais`)
    } else console.log('Saldo insuficiente')
  }

  getBalance = (): void => {
    console.log(`Seu saldo atual é ${this._balance}`)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
