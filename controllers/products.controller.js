const Product = require("../models/product.model.js");

// Create and Save a new Product
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  });

  Product.create(product, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Product."
      });
    else res.send(data);
  });
};

// Retrieve all Product from the database (with condition).
exports.findAll = (req, res) => {
      const title = req.query.title;

  Product.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    else res.send(data);
  });
};

exports.findAllPublished = (req, res) => {
  Product.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    else res.send(data);
  });
};

// Find a single Product with a id
exports.findOne = (req, res) => {
    
};

// find all published products
exports.findAllPublished = (req, res) => {
    Product.findById(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Product with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Product with id " + req.params.id
            });
          }
        } else res.send(data);
      });
};

// Update a Product identified by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
      console.log(req.body);
    
      Product.updateById(
        req.params.id,
        new Product(req.body),
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Product with id ${req.params.id}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating Product with id " + req.params.id
              });
            }
          } else res.send(data);
        }
      );
    
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {
    Product.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Product with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Product with id " + req.params.id
            });
          }
        } else res.send({ message: `Product was deleted successfully!` });
      });
};

// Delete all products from the database.
exports.deleteAll = (req, res) => {
    Product.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all products."
          });
        else res.send({ message: `All products were deleted successfully!` });
      });
};
