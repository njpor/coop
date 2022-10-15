module.exports = app => {
    const organization = require("../controllers/organization.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", organization.create);
  
    // Retrieve all Tutorials
    router.get("/", organization.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", organization.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", organization.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", organization.delete);
  
    // Delete all Tutorials
    router.delete("/", organization.deleteAll);
  
    app.use("/api/organization", router);
  };