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
  /* retrievePostIdsForUser */
  router.post("/printFaveList", favoritePosts.retrievePostIdsForUser);
  router.get("/findAll", favoritePosts.findAll);
  router.get("/findAllFavorites", favoritePosts.findAllFavorites);
  app.use('/api/favoritePosts', router);
};
