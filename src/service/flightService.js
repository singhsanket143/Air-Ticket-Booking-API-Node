const Flight = require('../models/flight');

const createFlight = async (data) => {
    try {
        const newFlight = {
            departureAirport: data.departureAirport,
            arrivalAirport: data.arrivalAirport,
            duration: data.duration,
            departureTime: data.departureTime,
            arrivalTime: data.arrivalTime,
            flightNumber: data.flightNumber,
            price: data.price,
            airline: data.airlineId
        }
        const response = await new Flight(newFlight).save();
        return response;
    } catch (err) {
        console.log(err);
    }
}

const updateFlight = async (data) => {
    try {
        const response = await Flight.updateOne({flightNumber: data.flightNumber}, data);
        return response;
    } catch(err) {
        console.log(err);
    }
}

const destroyFlight = async (flightNumber) => {
    try {
        const response = await Flight.findOneAndDelete({flightNumber: flightNumber});
        return response;
    } catch(err) {
        console.log(err);
    }
}

const getFlight = async (flightNumber) => {
    try {
        const response = await Flight.findOne({flightNumber: flightNumber});
        return response;
    } catch(err) {
        console.log(err);
    }
}   

const getAllFlights = async () => {
    try {
        const response = await Flight.find();;
        return response;
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    createFlight,
    updateFlight,
    destroyFlight,
    getFlight,
    getAllFlights
}