import { inspect } from "../decorators/inspect.js";
import { runtime } from "../decorators/runtime.js";
import { daysWeek } from "../enums/days-of-the-week.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationService } from "../services/negotiation-service.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";

export class NegotiationController{
    @domInject('#date')
    private inputDate:HTMLInputElement;
    @domInject('#amount')
    private inputAmount:HTMLInputElement;
    @domInject('#value')
    private inputValue:HTMLInputElement;
    private negotiations:Negotiations = new Negotiations();
    private negotiationsView = new NegotiationsView('#negotiationsView');
    private messageView = new MessageView('#messageView');
    private negotiationsService = new NegotiationService


    constructor(){
        this.negotiationsView.update(this.negotiations);
    }

    @runtime()
    @inspect()
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

    public importData():void{
        this.negotiationsService
        .getTodayNegotiation()
        .then(negotiationsToday => {
            for(let negotiation of negotiationsToday){
                this.negotiations.add(negotiation);
            }
            this.negotiationsView.update(this.negotiations)
        })
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