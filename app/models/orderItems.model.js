// Update to match exactly the SQL table.
// simular to java beans but with way less words, no gets or sets. everything is parsed into the json object

const { DataTypes } = require("sequelize");

// which is exported as a json. 
module.exports = (sequelize, Sequelize) => {
    const orderItems = sequelize.define('orderItems', { // in '' is the actual table name exactly as it is in sql
        orderItemId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          orderId: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          productId: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          quantity: {
            type: DataTypes.INTEGER,
            allowNull: true,
          },
          price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
          },    
    }, {
        tableName: 'orderItems',
        timestamps: false // This prevents Sequalize and the ORM from automatically searching for "created_at" and "updated_at". 
    });
  
    return orderItems;
  };