const Input = require("../models/input.model.js");

// Create and Save a new input
exports.createInput = (req, res) => {
    
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Should not be empty"
        });
    }
    // Create an input
    const input = new Input({
        Temperature: req.body.Temperature,
        AirQuality: req.body.AirQuality,
        Humidity: req.body.Humidity,
        zone: req.body.zone,
        Identifier : req.body.Identifier,
        Date: req.body.Date
    });
    // Save info in the database
    Input.createInput(input, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Error creating a new input."
        });
        else res.send(data);
    });
};

//Get all inputs from the database.
exports.findAllInputs = (req, res) => {
    const title = req.query.title;
    Input.getAllInputs(title, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Error getting the data"
        });
        else res.send(data);
    });
};