
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

  exports.getCommentsByPostId = async (req, res) => {
    try {
      // console.log("Time for the comments");
      console.log(req.query.postId);
      const { postId } = req.query;

      const commentsList = await comments.findAll({
        where: { postId: postId },
        attributes: ['commentText', 'commentDate'], 
      });

      return res.status(200).json(commentsList);
    } catch (error) {
      console.error('Error fetching comments:', error);
      return res.status(500).json({ error: 'Internal server error my good friend' });
    }
  };

  exports.getAllComments = async (req, res) => {
    try {
      const commentsList = await comments.findAll(); // Call the findAll method to execute the query
  
      return res.status(200).commentsList;
    } catch (error) {
      console.error('Error fetching comments:', error);
      return res.status(500).json({ error: 'Internal server error my good friend' });
    }
  };
  