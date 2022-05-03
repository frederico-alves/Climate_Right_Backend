const Info = require("../models/info.model.js");

// Create and Save a new information
exports.create = (req, res) => {
    
        // Validate request
        if (!req.body) {
            res.status(400).send({
            message: "Should not be empty"
            });
        }
        // Create a info
        const information = new Info({
            name: req.body.name,
            description: req.body.description,
        });
        // Save info in the database
        Info.create(information, (err, data) => {
            if (err)
            res.status(500).send({
                message:
                err.message || "Error creating a new info."
            });
            else res.send(data);
        });
    };

//Get all information from the database.
exports.findAll = (req, res) => {
   // const title = req.query.title;
    Info.getAll( (err, data) => {
        if (err)
        res.status(500).send({
            message:
            err.message || "Error getting the data"
        });
        else res.send(data);
    });
};
// get info by id

    exports.findOne = (req, res) => {
        Info.findById(req.params.id, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error getting thi ID " + req.params.id
              });
            }
          } else res.send(data);
        });
    };



// Update an info
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

// Delete one info
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
// Delete all info
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