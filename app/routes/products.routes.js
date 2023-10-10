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
    router.delete("/deleteProductByName/:productId", products.delete);
    //updates a product using product id
    router.put("/updateProduct/:productId", products.update);

    router.get("/findAll", products.findAll);

    router.get("/:productId", products.findById);
    //the main products api link
    app.use('/api/products', router);
  };
