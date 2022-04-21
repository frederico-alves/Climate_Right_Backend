const Info = require("../models/tutorial.model.js");
// Create and Save a new Tutorial
exports.create = (req, res) => {
    
        // Validate request
        if (!req.body) {
            res.status(400).send({
            message: "Content can not be empty!"
            });
        }
        // Create a Tutorial
        const information = new Info({
            name: req.body.name,
            description: req.body.description,
        });
        // Save Tutorial in the database
        Info.create(information, (err, data) => {
            if (err)
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Tutorial."
            });
            else res.send(data);
        });
    };

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
    const title = req.query.title;
    Info.getAll(title, (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving tutorials."
        });
        else res.send(data);
    });
};
// Find a single Tutorial with a id

    exports.findOne = (req, res) => {
        Info.findById(req.params.id, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Tutorial with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error retrieving Tutorial with id " + req.params.id
              });
            }
          } else res.send(data);
        });
    };

// find all published Tutorials
/*exports.findAllPublished = (req, res) =>
    Info.getAllPublished((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      else res.send(data);
    });*/

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;
   // Validate Request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Info.updateById(
    req.params.id,
    new Info(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Info with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Info with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  Info.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Info with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Info with id " + req.params.id
        });
      }
    } else res.send({ message: `Info was deleted successfully!` });
  });
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Info.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Infos."
      });
    else res.send({ message: `All Infos were deleted successfully!` });
  });
};