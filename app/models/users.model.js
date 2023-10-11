
// Update to match exactly the SQL table.
// simular to java beans but with way less words, no gets or sets. everything is parsed into the json object

const { DataTypes } = require("sequelize");

// which is exported as a json. 
module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('users', { // in '' is the actual table name exactly as it is in sql
        UserID:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Username:{
            type: DataTypes.STRING(255),
            defaultValue: null
        },
        Password:{
            type: DataTypes.STRING(255),
            defaultValue: null
        },
        Email:{
            type: DataTypes.STRING(255),
            defaultValue: null
        },
        address:{
            type: DataTypes.STRING(255),
            defaultValue: null
        }  //, etc , etc. untill the entire backend is linked.
    }, {
        tableName: 'users',
        timestamps: false // This prevents Sequalize and the ORM from automatically searching for "created_at" and "updated_at". 
    });
  
    return user;
  };