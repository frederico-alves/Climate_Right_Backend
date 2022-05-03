module.exports = app => {
    const informations = require("../controllers/info.controller.js");
    const inputs = require("../controllers/input.controller.js");
    var router = require("express").Router();

    // Create a new info
    router.post("/information", informations.create);

    // Retrieve all info
    router.get("/information", informations.findAll);

    // Get info by ID
    router.get("/information/:id", informations.findOne);

    // Update an info
    router.put("/information/:id", informations.update);

    // Delete an info
    router.delete("/information/:id", informations.delete);

    // Delete all info
    router.delete("/information", informations.deleteAll);

     router.get("/input", inputs.findAllInputs);

     router.post("/input", inputs.createInput);

    app.use('/', router);
  };