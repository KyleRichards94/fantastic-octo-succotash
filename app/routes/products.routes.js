module.exports = app => {
    const products= require("../controllers/products.controller.js");
    // add cart
    //add post
    // add comment
    // etc. when the model is finished. Simular to the big XML file in javabeans. 
  
    var router = require("express").Router();
    
    router.post("/addProduct", products.create)
    // impliment your CRUD
    app.use('/api/products', router);
  };
