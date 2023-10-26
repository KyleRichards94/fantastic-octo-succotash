
const db = require("../models"); //DB exists in the index.js folder. 
const posts = db.posts;   // The model this controller represents.
const Op = db.Sequelize.Op; // sql operators

const fs = require('fs');
const path = require('path');

const { v4: uuidv4 } = require('uuid'); // Import the uuid package for generating unique IDs


exports.create = (req, res) => {
    const post = {
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        imagePath: "",
        objFilePath: ""
    };

        // Generate unique filenames for objFile and imageFile
        const objFileExt = path.extname(req.files.objFile.name); // Get the file extension
        const imageFileExt = path.extname(req.files.imageFile.name);
    
        const objFileName = `${uuidv4()}${objFileExt}`;
        const imageFileName = `${uuidv4()}${imageFileExt}`;
        // Save the files to a specified directory
        const uploadDir = path.join(__dirname, 'FileSystem');
        const objFilePath = path.join(uploadDir, objFileName);
        const imageFilePath = path.join(uploadDir, imageFileName);
      //console.log('Request Object:', req);
      //console.log('objFile:', req.files.objFile);

      fs.mkdirSync(uploadDir, { recursive: true });
        req.files.objFile.mv(objFilePath);

        req.files.imageFile.mv(imageFilePath);
      
      
      post.imagePath = '/app/controllers/FileSystem/'+imageFileName;
      post.objFilePath = '/app/controllers/FileSystem/'+objFileName;
      // Now you can save post data to the database using Sequelize
      posts.create(post)
      .then(data => {
          res.status(200).send(data); // Send a success response
      })
      .catch(err => {
          console.error(err); // Log the error for debugging
          res.status(500).send({
              message: err.message || 'The post could not be created',
          });
      });
};

//return all posts 
exports.findAll = (req,res) => {
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
  
    posts.findByPk(postId)
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
  
    posts.findAll({
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
  
    posts.findByPk(postId)
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
// Find all post IDs (Only useful for comments really)

exports.getAllPostIDs = (req, res) => {
  
  // Query the database to get all Post IDs
  posts.findAll({
    attributes: ['postId'], // Select only the 'postId' field
  })
    .then((data) => {
      // Extract Post IDs from the data and create an array
      const postIDs = data.map((post) => post.postId);

      res.send(postIDs);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Could not retrieve Post IDs.',
      });
    });
};
