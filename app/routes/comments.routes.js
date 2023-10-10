module.exports = app => {
    const comments = require("../controllers/comments.controller.js");
    // add cart
    //add post
    // add comment
    // etc. when the model is finished. Simular to the big XML file in javabeans. 
  
    var router = require("express").Router();
    router.post("/create", comments.createComment);
    router.get("/getByPost", comments.getCommentsByPostId);
    router.get("/getAllComments", comments.getAllComments);
    app.use('/api/comment', router);
  };
