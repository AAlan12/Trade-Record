export class Negotiation{

    constructor(
       private  _date : Date,
       private readonly amount: number,
       private readonly value: number
    ){}

    get date():Date{
        const date = new Date(this._date.getTime());
        return this._date;
    }
    get volume():number{
        return this.amount * this.value
    }
}