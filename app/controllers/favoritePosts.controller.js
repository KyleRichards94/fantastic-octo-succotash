
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
        const messages = "Data received good";
        res.send({data,messages});
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "the post could not be created"
        });
    });
};

//to 
exports.retrievePostIdsForUser = (req, res) => {
    //the user id that we're searching for
    const userIdToSearch = 3;

    //get only the data where user id is 3
    favoritePosts.findAll({
        attributes: ['postId'],
        where: {
            userId: userIdToSearch
        }
    })
    .then(data => {
        // Extract postIds from the retrieved data
        //iterate through each item and input it's postId
        const FavePostsList = data.map(item => item.postId);

        // Log each item in the array
        FavePostsList.forEach(postId => {
            console.log(postId);
        });

        // Send the FavePostsList array as a response
        res.send({ FavePostsList });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Could not retrieve postIds."
        });
    });
};