module.exports = app => {
    const restShop = require("../controllers/rest_shop.controller.js");
  
    var router = require("express").Router();
  
    // Create a new product
    router.post("/", restShop.create);
  
    // Retrieve all products
    router.get("/", restShop.findAll);
  
    // Retrieve all published products
    router.get("/published", restShop.findAllPublished);
  
    // Retrieve a single product with id
    router.get("/:id", restShop.findOne);
  
    // Update a product with id
    router.put("/:id", restShop.update);
  
    // Delete a product with id
    router.delete("/:id", restShop.delete);
  
    // Delete all products
    router.delete("/", restShop.deleteAll);
  
    app.use('/api/restShop', router);
  };