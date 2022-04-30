const Input = require("../models/input.model.js");

// Create and Save a new input
exports.create = (req, res) => {
    
    // Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Should not be empty"
        });
    }
    // Create an input
    const input = new Input({
        Temperature: req.body.Temperature,
        Humidity: req.body.Humidity,
        AirQuality: req.body.AirQuality,
        zone: req.body.zone,
        Identifier : req.body.Identifier
    });
    // Save info in the database
    Input.create(input, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Error creating a new input."
        });
        else res.send(data);
    });
};

//Get all inputs from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    Info.getAll(title, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Error getting the data"
        });
        else res.send(data);
    });
};