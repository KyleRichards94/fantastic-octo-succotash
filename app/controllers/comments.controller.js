
const db = require("../models"); //DB exists in the index.js folder. 
const comments = db.comments;   // The model this controller represents.
const Op = db.Sequelize.Op; // sql operators

exports.createComment = async (req, res) => {
    
    try {
      const { postId, userId, commentText } = req.body;
      const newComment = await comments.create({ postId, userId, commentText });
      return res.status(201).json(newComment);
    } catch (error) {
      console.error('Error creating comment:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };