module.exports = app => {
    const informations = require("../controllers/info.controller.js");
    var router = require("express").Router();

    // Create a new info
    router.post("/", informations.create);

    // Retrieve all info
    router.get("information", informations.findAll);

    // Get info by ID
    router.get("/:id", informations.findOne);

    // Update an info
    router.put("/:id", informations.update);

    // Delete an info
    router.delete("/:id", informations.delete);

    // Delete all info
    router.delete("/", informations.deleteAll);

    app.use('/api/information', router);
  };