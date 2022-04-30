module.exports = app => {
    const inputs = require("../controllers/input.controller.js");
    var router = require("express").Router();

    // Create a new input
    router.post("/", inputs.create);

    // Retrieve all info
    router.get("/", inputs.findAll);

    app.use('/api/input', router);
};
