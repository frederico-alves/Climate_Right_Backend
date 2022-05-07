const Hightemperature = require("../models/hightemperature.model.js");

//Get all hightemperature from the database.
exports.findAllHighTemperatures = (req, res) => {
    Hightemperature.getAllHighTemperature ( (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Error getting the data"
        });
        else res.send(data);
    });
};
