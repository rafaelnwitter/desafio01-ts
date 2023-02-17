import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  private readonly _doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this._doc_id = doc_id
  }

  getDocId = (): void => {
    console.log(this._doc_id)
  }
}
