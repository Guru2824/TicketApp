class Ticket{
    constructor(source,destination,journeyDate){
        this.source= source;
        this.destination = destination;
        this.journeyDate = journeyDate;
    }
}

const _Ticket = Ticket;
export { _Ticket as Ticket };