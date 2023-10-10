

// Update to match exactly the SQL table.
// simular to java beans but with way less words, no gets or sets. everything is parsed into the json object

const { DataTypes } = require("sequelize");

// which is exported as a json. 
module.exports = (sequelize, Sequelize) => {
    const products = sequelize.define('products', { // in '' is the actual table name exactly as it is in sql
        //here enter your data stuff
        ProductID: {
            type: Number,
            required: true,
            autoIncrement: true,
            primaryKey: true
          },
          ProductName: {
            type: String,
            required: true
          },
          Description: {
            type: String,
            required: true
          },
          Price: {
            type: Number,
            required: true
          },
          imageLocation: {
            type: String,
            required: false
          }
        },
        {
        timestamps: false
    });
  
    return products;
  };

  // product.model.js

