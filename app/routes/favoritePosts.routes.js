/* module.exports = app => {
  const favoritePosts = require("../controllers/favoritePosts.controller.js");
  //boring stuff
  var router = require("express").Router();

  router.get("/findAll", favoritePosts.findAll);

  // Favourite posts api link
  app.use('/api/favoritePosts', router);
}; */


module.exports = app => {
  const favoritePosts = require("../controllers/favoritePosts.controller.js");
  var router = require("express").Router();
  router.post("/addPost", favoritePosts.create);
  router.get("/findAll", favoritePosts.findAll);
  app.use('/api/favoritePosts', router);
};
