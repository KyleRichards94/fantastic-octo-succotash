//sequelize initalization, 
// this is an way
const dbConfig = require("../config/db.config.js");


//this is also an way
//const dbConfig = {
//    HOST: "localhost",
//    USER: "root",
//    PASSWORD: "123456",
//    DB: "testdb",
//    dialect: "mysql",
//    pool: {
//      max: 5,
//      min: 0,
//      acquire: 30000,
//      idle: 10000
//    }
//  };

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  //add a dot accessor for each model.  Comment out all of the DB accessors except the one you are testing until we have finished them all. 
  db.users = require("./users.model.js")(sequelize, Sequelize);
  db.shippingInfo = require("./shippingInfo.model.js")(sequelize, Sequelize);
  db.products = require("./products.model.js")(sequelize, Sequelize);
  db.posts = require("./posts.model.js")(sequelize, Sequelize);
  db.orders = require("./orders.model.js")(sequelize, Sequelize);
  db.orderItems = require("./orderItems.model.js")(sequelize, Sequelize);
  db.favoritePosts = require("./favoritePosts.model.js")(sequelize, Sequelize);
  db.enquiries = require("./enquiries.model.js")(sequelize, Sequelize);
  db.creditCardInfo = require("./creditCardInfo.model.js")(sequelize, Sequelize);
  db.comments = require("./comments.model.js")(sequelize, Sequelize);

  module.exports = db;