module.exports = app => {
  const favoritePosts = require("../controllers/favoritePosts.controller.js");
  const posts = require("../controllers/posts.controller.js");
  //boring stuff
  var router = require("express").Router();

  // retrieve all favourite posts
  router.get("/findAll", favoritePosts.findAll);

  //adding a post oto favorirtes.
  router.post("/addFavorite", favorite.create);

  // Favourite posts api link
  app.use('/api/favoritePosts', router);
};
