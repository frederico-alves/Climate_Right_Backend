module.exports = app => {
    const informations = require("../controllers/info.controller.js");
    const inputs = require("../controllers/input.controller.js")
    var router = require("express").Router();

    // Create a new info
    router.post("/api/information", informations.create);

    // Retrieve all info
    router.get("/api/information", informations.findAll);

    // Get info by ID
    router.get("/api/information/:id", informations.findOne);

    // Update an info
    router.put("/api/information/:id", informations.update);

    // Delete an info
    router.delete("/api/information/:id", informations.delete);

    // Delete all info
    router.delete("/api/information", informations.deleteAll);

     router.get("/api/input", inputs.findAllInputs);

     router.post("/api/input", inputs.createInput);

    app.use('/', router);
  };