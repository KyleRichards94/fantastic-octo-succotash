module.exports = app => {
    const orders = require("../controllers/orders.controller.js");
    // add cart
    //add post
    // add comment
    // etc. when the model is finished. Simular to the big XML file in javabeans. 
  
    var router = require("express").Router();
    
    // impliment your CRUD
    router.post("/create", orders.create);

    //retrieve all orders
    router.get("/findAll", orders.findAll);

    //retieve all orders by userid
    router.get("/:userId", orders.findByUserId);

    //retrieve order by orderId
    router.get("/find/:orderId", orders.findOne);

    router.put("/:orderId", orders.update);

    router.delete("/:orderId", orders.delete);

    app.use('/api/orders', router);
  };
