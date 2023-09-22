// Update to match exactly the SQL table.
// simular to java beans but with way less words, no gets or sets. everything is parsed into the json object

const { DataTypes } = require("sequelize");

// which is exported as a json. 
module.exports = (sequelize, Sequelize) => {
    const enquiries = sequelize.define('enquiries', { // in '' is the actual table name exactly as it is in sql
        }, {
        timestamps: false // This prevents Sequalize and the ORM from automatically searching for "created_at" and "updated_at". 
    });
  
    return enquiries;
  };