module.exports = app => {
    const creditCardInfo = require("../controllers/creditCardInfo.controller.js");
    // add cart

    //add post
    // add comment
    // etc. when the model is finished. Simular to the big XML file in javabeans. 
  
    var router = require("express").Router();
    router.get("/:userId", creditCardInfo.findAll);
    router.post("/create", creditCardInfo.create);

    //surely there should be some security measures inplace here.
    app.use('/api/creditCardInfo/602180932584db97696812f66041665176eef325b740e01138cca037b844e3bc5efa56b645c2af53ea692494ced626491eaf283d33b2973aae98239485394989', router);
    // impliment your CRUD
  };
