class TicketAPI {

    constructor(){

    }

    trains = [
        { trainNo:123, from:"Chennai Central",to: "Bangalore", type:"DAILY", status:"CANCELLED"},
        { trainNo:124, from:"Chennai Central",to: "Bangalore", type:"MON,THU"},
        { trainNo:125, from:"Chennai Central",to: "Bangalore", type:"WED"}
    ];

    search(source,destination, journeyDate){
        let filteredTrains =  this.trains;
        //implement logic
        return filteredTrains;
    }
}


const _TicketAPI = TicketAPI;
export { _TicketAPI as TicketAPI };