// import { TicketAPI } from "./TicketApi";

const { TicketAPI } = require("./TicketApi");

const ticketAPI = new TicketAPI();
let trains = ticketAPI.searchTrain("Chennai Central", "Bangalore", "2021-02-03");
console.log(trains);