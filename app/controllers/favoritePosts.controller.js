
const db = require("../models"); //DB exists in the index.js folder. 
const favoritePosts= db.favoritePosts;   // The model this controller represents.
const posts = db.posts;   // The model this controller represents.
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
    const userId = req.body.userId;
    const postId = req.body.postId;

    // Check if the postId already exists in the table
    favoritePosts.findOne({
        where: {
            userId: userId,
            postId: postId
        }
    })
    .then(existingRecord => {
        if (existingRecord) {
            // If the record exists, delete it
            existingRecord.destroy()
                .then(() => {
                    res.send({ messages: "Existing post removed." });
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Error deleting existing post."
                    });
                });
        } else {
            // If the record doesn't exist, create a new one
            favoritePosts.create({ userId: userId, postId: postId })
                .then(data => {
                    res.send({ data, messages: "Post added successfully." });
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Error creating post."
                    });
                });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error checking for existing post."
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

//return all favorited posts
/* exports.findAllFavorites = (req, res) => {
    favoritePosts.findAll().then((data) => {
        const messages = "Data retreived good";
        res.send({messages, data});
    }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Could not retrieve posts."
        });
    });
}; */

exports.findAllFavorites = (req, res) => {
    // First, retrieve a list of postId values from favoritePosts where userId is 3
    db.favoritePosts.findAll({
        where: {
            userId: 3
        },
        attributes: ['postId']
    })
    .then((favoritePostsData) => {
        // Extract postId values from the result
        const postIds = favoritePostsData.map((favorite) => favorite.postId);

        // Now, retrieve posts with matching postIds from the "posts" table
        db.posts.findAll({
            where: {
                postId: postIds
            }
        })
        .then((postsData) => {
            const messages = "Data retrieved successfully";
            res.send(postsData );
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Could not retrieve posts."
            });
        });
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message || "Could not retrieve favorite posts."
        });
    });
};