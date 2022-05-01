const FlightService = require('../service/flightService');

const createFlight = async (req, res) => {
    try {
        const flight = await FlightService.createFlight(req.body);
        res.status(200).json({
            success: true,
            message: 'Successfully created flight',
            data: flight
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

const getFlight = async (req, res) => {
    try {
        const flight = await FlightService.getFlight(req.params.flightNumber);
        res.status(200).json({
            success: true,
            message: 'Successfully fetched flight',
            data: flight
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

const getAllFlights = async (req, res) => {
    try {
        const flights = await FlightService.getAllFlights();
        res.status(200).json({
            success: true,
            message: 'Successfully fetched all flights',
            data: flights
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

const destroyFlight = async (req, res) => {
    try {
        const flight = await FlightService.destroyFlight(req.query.flightNumber);
        res.status(200).json({
            success: true,
            message: 'Successfully deleted flight',
            data: flight
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

module.exports = {
    createFlight,
    getFlight,
    getAllFlights,
    destroyFlight
}