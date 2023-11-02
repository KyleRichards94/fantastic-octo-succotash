module.exports = app => {
    const shippingInfo = require("../controllers/shippingInfo.controller.js");
    // add cart
    //add post
    // add comment
    // etc. when the model is finished. Simular to the big XML file in javabeans. 
  
    var router = require("express").Router();

    router.get("/:userId", shippingInfo.findAll);
    router.post("/create", shippingInfo.create);

    //surely there should be some security measures inplace here.
    app.use("/api/shippingInfo/2ad59922acb10f6ea75ceb3e914a1210831aa94354251d5e3330055a8b71eae635cacb1fe7c7b924d9412e0253fe20ee", router);
    
    // impliment your CRUD
  };
