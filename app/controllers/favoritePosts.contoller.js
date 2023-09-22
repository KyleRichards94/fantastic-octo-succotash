
const db = require("../models"); //DB exists in the index.js folder. 
const favoritePosts= db.favoritePosts;   // The model this controller represents.
const Op = db.Sequelize.Op; // sql operators

