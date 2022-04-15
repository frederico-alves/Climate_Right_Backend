module.exports = app => {
    const informations = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", informations.create);
    // Retrieve all Tutorials
    router.get("/", informations.findAll);
    // Retrieve all published Tutorials
    //router.get("/published", informations.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", informations.findOne);
    // Update a Tutorial with id
    router.put("/:id", informations.update);
    // Delete a Tutorial with id
    router.delete("/:id", informations.delete);
    // Delete all Tutorials
    router.delete("/", informations.deleteAll);
    app.use('/api/information', router);
  };