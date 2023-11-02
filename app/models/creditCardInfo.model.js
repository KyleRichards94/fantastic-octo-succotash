// Update to match exactly the SQL table.
// simular to java beans but with way less words, no gets or sets. everything is parsed into the json object

const { DataTypes } = require("sequelize");

// which is exported as a json. 
module.exports = (sequelize, Sequelize) => {
    const creditCardInfo = sequelize.define('creditcardinfo', { // in '' is the actual table name exactly as it is in sql
        creditCardId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },

        userId: {
            type: DataTypes.INTEGER,
        },
        cardNumber: {
            type: DataTypes.STRING(16),
        },
        expiryDate: {
            type: DataTypes.DATE,
        },
        cardHolderName: {
            type: DataTypes.STRING(255),
        },
        billingAddress: {
            type: DataTypes.STRING(255),
        },
        CVC: {
            type: DataTypes.INTEGER,
        }


        }, {
        tableName: 'creditcardinfo',
        timestamps: false // This prevents Sequalize and the ORM from automatically searching for "created_at" and "updated_at". 
    });
    
    return creditCardInfo;
  };