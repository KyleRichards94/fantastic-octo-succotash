module.exports = app => {
    const creditCardInfo = require("../controllers/creditCardInfo.controller.js");
    // add cart

    //add post
    // add comment
    // etc. when the model is finished. Simular to the big XML file in javabeans. 
  
    var router = require("express").Router();
    router.get("/findAll", creditCardInfo.findAll);
    router.post("/create", creditCardInfo.create);

    //surely there should be some security measures inplace here.
    app.use("/api/creditCardInfo", router);
    // impliment your CRUD
  };
