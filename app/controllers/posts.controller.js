
const db = require("../models"); //DB exists in the index.js folder. 
const posts = db.posts;   // The model this controller represents.
const Op = db.Sequelize.Op; // sql operators

//Create and save a new Post
exports.create = (req, res) => {
    const post = {
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        imagePath: req.body.imagePath,
        objFilePath: req.body.objFilePath
        //date will be ommited from the request. 
    };

    posts.create(post).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "the post could not be created"
        });
    });
};

//return all posts 
exports.findAll = (req, res) => {
    posts.findAll().then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Could not retrieve posts."
        });
    });
};
// Retrieve a single Post by postId
exports.findOne = (req, res) => {
    const postId = req.params.postId;
  
    Post.findByPk(postId)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Post with postId ${postId} not found`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "An error occurred while retrieving the post",
        });
      });
  };

// Find posts with titles matching the pattern in req.body
exports.findFiltered = (req, res) => {
    const titlePattern = req.body.titlePattern;
  
    if (!titlePattern) {
      res.status(400).send({
        message: "Title pattern is required in the request body",
      });
      return;
    }
  
    Post.findAll({
      where: {
        title: {
          [Op.like]: `%${titlePattern}%`,
        },
      },
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "An error occurred while retrieving filtered posts",
        });
      });
  };

// Update a Post by postId
exports.update = (req, res) => {
    const postId = req.params.postId;
  
    posts.update(req.body, {
      where: { postId: postId }
    })
      .then((num) => {
        if (num == 1) {
          res.send({ message: "Post was successfully updated" });
        } else {
          res.status(404).send({
            message: `Post with postId ${postId} not found`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "An error occurred while updating the post",
        });
      });
  };

  // Delete a Post by postId
exports.delete = (req, res) => {
    const postId = req.params.postId;
  
    Post.findByPk(postId)
      .then((post) => {
        if (!post) {
          res.status(404).send({
            message: `Post with postId ${postId} not found`,
          });
        } else {
          post
            .destroy()
            .then(() => {
              res.send({ message: "Post was successfully deleted" });
            })
            .catch((err) => {
              res.status(500).send({
                message: err.message || "An error occurred while deleting the post",
              });
            });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "An error occurred while retrieving the post",
        });
      });
  };