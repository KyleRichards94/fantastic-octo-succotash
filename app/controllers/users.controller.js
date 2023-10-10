//The contorller now knows what a "User" json object should look like as defined in the model 
// and we can now generate export functions specific to User.
// This process is to be repeated for all database Tables for a robust backend integration.  

const db = require("../models"); //DB exists in the index.js folder. 
const users = db.users;   // The model this controller represents.
const Op = db.Sequelize.Op; // sql operators

// Create and Save a new User to the DB
exports.create = (req, res) => {
    const user = {
        UserID: req.body.UserID,
        userName: req.body.userName,
        password: req.body.password,
        email: req.body.email,
        address: req.body.address
    }; 

    //User is defined as a sequalize object and call the create function
    // instead of fidgeting with big sql strings.
    users.create(user).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Something horrible happened when adding a user."
        });
    });
};

//Login using username and password
exports.login = (req, res) => {
  const userName = req.body.userName;
  const password  = req.body.password;

  console.log("Received request with userName:", userName);
  console.log("Received request with password:", password);
  
  users.findOne({ where: {userName, password}}).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `User called ${userName} not found or the username and password don't match`,
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

// Retrieve all Users from the data base 
// OR if given a request parameter condition it will find all Like the condition. 
// Find all users with the user name like.
exports.findAllOrOne= (req, res) => {
    const Username = req.body.Username;
    const Email = req.body.Email;
    var UsernameCondition = Username? { Username: { [Op.like]: `%${Username}%` } } : null;
    var EmailCondition = Email ? { Email : { [Op.like]: `%${Email}%` } } : null;

    if(Username){
        users.findAll({ where: UsernameCondition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Users. Maybe the username does not exist"
            });
        });

     } else if (Email){
        users.findAll({ where: EmailCondition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Users Maybe the email does not exist."
            });
        });

     } else {
        users.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving Users."
            });
        });
     }
}

// Find User by ID
exports.findOneByID = (req, res) => {
    const id = req.params.id;

    users.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with UserID=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with UserID=" + id
        });
      });
  };
  

// Update a User by the id in the request
// The request will be a Json object that directly matches the structure of the User model template.
exports.update = (req, res) => {
    const id = req.body.userId;
  
    users.update(req.body, {
      where: { userId: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with UserID=${id}. Maybe user was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Userwith UserID=" + id
        });
      });
  };



  
// Delete a user with the specified id in the request
exports.delete = (req, res) => {
    const id = req.body.userId;
  
    users.destroy({
      where: { userId: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with UserID=${id}. The user may not exist.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Could not delete User with UserID=" + id
        });
      });
  };
// Delete all Users from the database. DO NOT CALL THIS AT RUN TIME.
exports.deleteAll = (req, res) => {
    users.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Users were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Users."
        });
      });
  };