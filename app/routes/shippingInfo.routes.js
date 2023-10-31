module.exports = app => {
    const shippingInfo = require("../controllers/shippingInfo.controller.js");
    // add cart
    //add post
    // add comment
    // etc. when the model is finished. Simular to the big XML file in javabeans. 
  
    var router = require("express").Router();

    router.get("/findAll", shippingInfo.findAll);
    router.post("/create", shippingInfo.create);

    //surely there should be some security measures inplace here.
    app.use("/api/shippingInfo/602180932584db97696812f66041665176eef325b740e01138cca037b844e3bc5efa56b645c2af53ea692494ced626491eaf283d33b2973aae98239485394989/", router);
    
    // impliment your CRUD
  };
