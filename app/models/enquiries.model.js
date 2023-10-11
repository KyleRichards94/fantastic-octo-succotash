// Update to match exactly the SQL table.
// simular to java beans but with way less words, no gets or sets. everything is parsed into the json object

const { DataTypes } = require("sequelize");

// which is exported as a json. 
module.exports = (sequelize, Sequelize) => {
    const enquiries = sequelize.define('enquiries', { // in '' is the actual table name exactly as it is in sql

        enquiryID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },

          userID: {
            type: DataTypes.INTEGER,
            // defaultValue: null,
            // references: {
            //   model: 'users', // Replace with your actual users table name
            //   key: 'UserID',
            // },
          },
          subject: {
            type: DataTypes.STRING(255),
            defaultValue: null,
          },
          message: {
            type: DataTypes.TEXT,
          },
          timestamp: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
          },
          reply: {
            type: DataTypes.TEXT,
          },
          unreplied: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,

          },

        }, {
        tableName: 'enquiries',
        timestamps: false // This prevents Sequalize and the ORM from automatically searching for "created_at" and "updated_at". 
    });
  
    return enquiries;
  };