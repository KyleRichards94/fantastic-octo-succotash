module.exports = app => {
    const posts = require("../controllers/posts.controller.js");
    // add cart
    //add post
    // add comment
    // etc. when the model is finished. Simular to the big XML file in javabeans. 
  
    var router = require("express").Router();

    //create new post
    router.post("/create", posts.create);

    // retrieve all posts
    router.get("/findAll", posts.findAll);

    //find one post by id 
    router.get("/:postId", posts.findOne);

    //find all by title filterd
    router.get("/findFiltered", posts.findFiltered);

    //update a single post by id
    router.put("/:postId", posts.update);

    //delete a post by Id
    router.delete("/:postId", posts.delete);

    //Fetch all post Ids, no idea why it only works with /posts/getAllPosts and not just /getallPosts
    router.get('/posts/getAllPostIds', posts.getAllPostIDs);
    
    
    //Add an upvote to a post
    router.post('/posts/upvotePost', posts.upvotePost);
    //Add a downvote to a post
    router.post('/posts/downvotePost', posts.downvotePost);

    app.use('/api/posts', router);
    // impliment your CRUD
  };
