
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
