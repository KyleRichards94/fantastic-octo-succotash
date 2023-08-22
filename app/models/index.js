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

  //add a dot accessor for each model.
  db.Users = require("./users.model.js")(sequelize, Sequelize);

  module.exports = db;