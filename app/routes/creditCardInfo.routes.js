module.exports = app => {
    const creditCardInfo = require("../controllers/creditCardInfo.controller.js");
    // add cart
    const posts = require("../controllers/posts.controller.js");

    //add post
    // add comment
    // etc. when the model is finished. Simular to the big XML file in javabeans. 
  
    var router = require("express").Router();
    router.get("/findAll", posts.findAll);
    app.use('/api/creditCard', router);
    // impliment your CRUD
  };
