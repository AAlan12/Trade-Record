import { daysWeek } from "../enums/days-of-the-week.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";

export class NegotiationController{
    private inputDate:HTMLInputElement;
    private inputAmount:HTMLInputElement;
    private inputValue:HTMLInputElement;
    private negotiations:Negotiations = new Negotiations();
    private negotiationsView = new NegotiationsView('#negotiationsView');
    private messageView = new MessageView('#messageView');


    constructor(){
        this.inputDate = document.querySelector('#date') as HTMLInputElement;
        this.inputAmount = document.querySelector('#amount') as HTMLInputElement;
        this.inputValue = document.querySelector('#value') as HTMLInputElement;
        this.negotiationsView.update(this.negotiations);
    }

    public add():void{
        const negotiation = Negotiation.createNegotiation(
            this.inputDate.value,
            this.inputAmount.value,
            this.inputValue.value
        );

        if(!this.businessDay(negotiation.date)){
            this.messageView.update('Only trades on business days are accepted');
            return;
        }

        this.negotiations.add(negotiation);
        this.clearForm();
        this.updateView();
    }

    private businessDay(date: Date){
        return date.getDay() > daysWeek.SUNDAY
        && date.getDay() < daysWeek.SATURDAY;
    }

    private clearForm():void{
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }

    private updateView():void{
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('trade added successfully');
    }
}