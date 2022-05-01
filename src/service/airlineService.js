const Airline = require('../models/airline');

const createAirline = async (data) => {
    try {
        const newAirline = {
            name: data.name
        }
        const response = await new Airline(newAirline).save();
        return response;
    } catch (err) {
        console.log(err);
    }
}

const destroyAirline = async (name) => {
    try {
        const response = await Airline.findOneAndDelete({name: name});
        console.log(response)
        return response;
    } catch(err) {
        console.log(err);
    }
}

const getAirline = async (name) => {
    try {
        const response = await Airline.findOne({name: name});
        return response;
    } catch(err) {
        console.log(err);
    }
}   

const getAllAirlines = async () => {
    try {
        const response = await Airline.find();;
        return response;
    } catch(err) {
        console.log(err);
    }
}

module.exports = {
    createAirline,
    destroyAirline,
    getAirline,
    getAllAirlines
}