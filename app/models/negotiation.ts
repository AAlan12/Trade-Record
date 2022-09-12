export class Negotiation{

    constructor(
       private  _date : Date,
       public readonly amount: number,
       public readonly value: number
    ){}

    get date():Date{
        const date = new Date(this._date.getTime());
        return this._date;
    }
    get volume():number{
        return this.amount * this.value
    }
}