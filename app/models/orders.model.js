

// Update to match exactly the SQL table.
// simular to java beans but with way less words, no gets or sets. everything is parsed into the json object

const { DataTypes } = require("sequelize");

// which is exported as a json. 
module.exports = (sequelize, Sequelize) => {
    const orders = sequelize.define('orders', { // in '' is the actual table name exactly as it is in sql
        orderId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId:{
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        orderDate:{
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        totalAmount :{
            type: DataTypes.DECIMAL,
            defaultValue: 0.00
        },
    }, {
        tableName: 'orders',
        timestamps: false // This prevents Sequalize and the ORM from automatically searching for "created_at" and "updated_at". 
    });
  
    return orders;
  };