const RestShop = require("../models/rest_shop.model.js");

// Create and Save a new RestShop
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const restShop = new RestShop({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  });

  RestShop.create(restShop, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

// Retrieve all RestShop from the database (with condition).
exports.findAll = (req, res) => {
      const title = req.query.title;

  RestShop.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.findAllPublished = (req, res) => {
  RestShop.getAllPublished((err, data) => {
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
    
};

// find all published Tutorials
exports.findAllPublished = (req, res) => {
    RestShop.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found RestShop with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving RestShop with id " + req.params.id
            });
          }
        } else res.send(data);
      });
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      console.log(req.body);
    
      RestShop.updateById(
        req.params.id,
        new RestShop(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found RestShop with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating RestShop with id " + req.params.id
              });
            }
          } else res.send(data);
        }
      );
    
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    RestShop.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found RestShop with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete RestShop with id " + req.params.id
            });
          }
        } else res.send({ message: `RestShop was deleted successfully!` });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    RestShop.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all tutorials."
          });
        else res.send({ message: `All Tutorials were deleted successfully!` });
      });
};
