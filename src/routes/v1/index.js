const express = require("express");

const router = express.Router();
const helpController = require("../../controllers/helpController");
const airlineController = require("../../controllers/airlineController");

router.get("/help", helpController.helpDetails);
router.post("/airline", airlineController.createAirline);
router.get("/airline/:name", airlineController.getAirline);
router.get("/airline", airlineController.getAllAirlines);
router.delete("/airline", airlineController.destroyAirline);
module.exports = router;