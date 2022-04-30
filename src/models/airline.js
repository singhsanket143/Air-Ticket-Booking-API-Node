const mongoose = require('mongoose');

const airlineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    website: {
        type: String
    }
}, {timeStamps: true});

const Airline = new mongoose.model('Airline', airlineSchema);

module.exports = Airline;