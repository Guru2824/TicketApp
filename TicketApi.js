class TicketAPI {

    constructor() {

    }
                               
    IsValidInput(source, destination, journeyDate) {
        var isExists = true;
        if (source == null || source == "") {
            isExists = false;
        }
        else if (destination == null || destination == "") {
            isExists = false;
        }
        else if (journeyDate == "Invalid Date") {
            isExists = false;
        }

        return isExists;
    }

    // TO CONVERT DATE TO STRING AND SUBSTRING
    getDay(date) {
        return date.toString().substring(0, 3).toUpperCase();
    }

    isTrainOnThatDay(type, journeyDate) {
        let journeyDay = this.getDay(journeyDate);
        let days = type.split(",");
        return type == "DAILY" || days.includes(journeyDay);

    }

    searchTrain(source, destination, journeyDateStr) {
        var trains = [
            { trainNo: 123, from: "Chennai Central", to: "Bangalore", type: "DAILY", status: "CANCELLED" },
            { trainNo: 124, from: "Chennai Central", to: "Bangalore", type: "MON,THU" },
            { trainNo: 125, from: "Chennai Central", to: "Bangalore", type: "WED" }
        ];
        let journeyDate = new Date(journeyDateStr);
        let IsValid = this.IsValidInput(source, destination, journeyDate);
        if (IsValid == true) {
            let filteredTrains = trains.filter(t => t.status != "CANCELLED" && this.isTrainOnThatDay(t.type, journeyDate));
            //implement logic
            return filteredTrains;
        } else {
            console.log("InCorrect Details")
        }

    }
}


// const _TicketAPI = TicketAPI;
// export { _TicketAPI as TicketAPI };

exports.TicketAPI = TicketAPI;