
// Update to match exactly the SQL table.
// simular to java beans but with way less words, no gets or sets. everything is parsed into the json object

const { DataTypes } = require("sequelize");

// which is exported as a json. 
module.exports = (sequelize, Sequelize) => {
    const shippingInfo = sequelize.define('shippingInfo', { // in '' is the actual table name exactly as it is in sql

    shippingInfoId : {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
    },
    fullName: {
        type: DataTypes.STRING(255),
    },
    address: { 
        type: DataTypes.STRING(255),
    },
    city: {
        type: DataTypes.STRING(255),
    },
    state: {
        type: DataTypes.STRING(255),
    },
    postalCode: {
        type: DataTypes.STRING(10),
    },
    country: {
        type: DataTypes.STRING(255),
    },
        }, {
        tableName:'shippingInfo',
        timestamps: false // This prevents Sequalize and the ORM from automatically searching for "created_at" and "updated_at". 
    });
  
    return shippingInfo;
  };