module.exports = app => {
    const orderItems = require("../controllers/orderItems.controller.js");
    // add cart
    //add post
    // add comment
    // etc. when the model is finished. Simular to the big XML file in javabeans. 
  
    var router = require("express").Router();
    
    // impliment your CRUD
    router.post("/create", orderItems.create);

    router.get("/findAll", orderItems.findAll);

    router.get("/order/:orderId", orderItems.findByOrderId);

    router.get("/:orderItemId", orderItems.findOne);

    router.put("/:orderItemId", orderItems.update);

    router.delete("/:orderItemId", orderItems.delete);

    router.delete("/orderDestroy/:orderId", orderItems.destroyCart);

    app.use('/api/orderItems', router);
  };
