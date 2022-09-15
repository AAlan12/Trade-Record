import { TodayNegotiation } from "../interfaces/today-negotiation.js";
import { Negotiation } from "../models/negotiation.js";

export class NegotiationService{
    
    public getTodayNegotiation(): Promise<Negotiation[]>{
        return fetch('http://localhost:8080/data')
        .then(res => res.json())
        .then((data: TodayNegotiation[]) => {
            return data.map(dataToday => {
                return new Negotiation(
                    new Date(),
                    dataToday.times,
                    dataToday.total
                )
            })
        })
    }
}