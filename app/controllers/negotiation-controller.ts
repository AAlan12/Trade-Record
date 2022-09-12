import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";

export class NegotiationController{
    private inputDate:HTMLInputElement;
    private inputAmount:HTMLInputElement;
    private inputValue:HTMLInputElement;
    private negotiations:Negotiations = new Negotiations();

    constructor(){
        this.inputDate = document.querySelector('#date');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector('#value');
    }

    add():void{
        const negotiation = this.createNegotiation();
        this.negotiations.add(negotiation);
        console.log(this.negotiations.list());
        this.clearForm();
    }
    createNegotiation():Negotiation{
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp,','));
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date,amount,value);
    }
    clearForm():void{
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}