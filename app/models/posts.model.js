// Update to match exactly the SQL table.
// simular to java beans but with way less words, no gets or sets. everything is parsed into the json object

const { DataTypes } = require("sequelize");

// which is exported as a json. 
module.exports = (sequelize, Sequelize) => {
    const posts = sequelize.define('posts', { // in '' is the actual table name exactly as it is in sql
        postId:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId:{
            type: DataTypes.INTEGER,
            defaultValue: null
        },
        title:{
            type: DataTypes.STRING(255),
            defaultValue: null
        },
        description:{
            type: DataTypes.TEXT,
            defaultValue: null
        },
        imagePath: {
            type: DataTypes.STRING(255),
            defaultValue: null
        },
        objFilePath:{
            type: DataTypes.STRING(255),
            defaultValue: null
        },
        postDate: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },

    }, {
        tableName: 'posts',
        timestamps: false // This prevents Sequalize and the ORM from automatically searching for "created_at" and "updated_at". 
    });
  
    return posts;
  };