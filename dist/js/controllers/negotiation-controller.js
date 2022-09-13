import { daysWeek } from "../enums/days-of-the-week.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView('#negotiationsView');
        this.messageView = new MessageView('#messageView');
        this.inputDate = document.querySelector('#date');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector('#value');
        this.negotiationsView.update(this.negotiations);
    }
    add() {
        const negotiation = Negotiation.createNegotiation(this.inputDate.value, this.inputAmount.value, this.inputValue.value);
        if (!this.businessDay(negotiation.date)) {
            this.messageView.update('Only trades on business days are accepted');
            return;
        }
        this.negotiations.add(negotiation);
        this.clearForm();
        this.updateView();
    }
    businessDay(date) {
        return date.getDay() > daysWeek.SUNDAY
            && date.getDay() < daysWeek.SATURDAY;
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    updateView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update('trade added successfully');
    }
}
