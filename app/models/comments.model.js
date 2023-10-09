// Update to match exactly the SQL table.
// simular to java beans but with way less words, no gets or sets. everything is parsed into the json object
const PostModel = require('./posts.model.js');
const { DataTypes } = require("sequelize");

// which is exported as a json. 
module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define('comments', {
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'posts', 
        key: 'postId'   
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true, 
      references: {
        model: 'users', 
        key: '1301'   
      }
    },
    commentText: {
      type: DataTypes.TEXT,
      allowNull: true 
    },
    commentDate: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    timestamps: false
  });

  return Comment;
};