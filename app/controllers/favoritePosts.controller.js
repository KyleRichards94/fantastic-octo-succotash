
const db = require("../models"); //DB exists in the index.js folder. 
const favoritePosts= db.favoritePosts;   // The model this controller represents.
const Op = db.Sequelize.Op; // sql operators

//return all posts 
exports.findAll = (req, res) => {
    favoritePosts.findAll().then((data) => {
        const messages = "Data retreived good";
        res.send({messages, data});
    }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Could not retrieve posts."
        });
    });
};

//Create and save a new Post
exports.create = (req, res) => {
    const post = {
        userId: req.body.userId,
        postId: req.body.postId
        //date will be ommited from the request. 
    };

    favoritePosts.create(post).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "the post could not be created"
        });
    });
};