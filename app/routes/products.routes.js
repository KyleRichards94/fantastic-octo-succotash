module.exports = app => {
    const products= require("../controllers/products.controller.js");
    // add cart
    //add post
    // add comment
    // etc. when the model is finished. Simular to the big XML file in javabeans. 
  
    var router = require("express").Router();
    //to add a product using the form int PMC(product management console)
    router.post("/addProduct", products.create)
//to delete a product using name using the PMC
    router.delete("/deleteProductByName/:ProductID", products.delete);
    // impliment your CRUD
    app.use('/api/products', router);
  };
