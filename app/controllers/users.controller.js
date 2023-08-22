//The contorller now knows what a "User" json object should look like as defined in the model 
// and we can now generate export functions specific to User.
// This process is to be repeated for all database Tables for a robust backend integration.  

const db = require("../models"); //DB exists in the index.js folder. 
const User = db.Users;   // The model this controller represents.
const Op = db.Sequelize.Op; // sql operators

// Create and Save a new User
exports.create = (req, res) => {
    //Validation// basic validation call for now. 
    // req = request, ie the string we will pull from the html form later.
    //if(!req.body.Username && !req.body.PasswordHash){ // the req body, defines EXACTLY what the json file should be typed as, which should exactly match the database.
    //    res.status(400).send({
    //        message: "Name or Password Cannot be empty!"
    //    });
    //    return;
    //}
    ////if validation was define a new user. 
    const user = {
        //UserID: should Auto Incriment. Hopefully. 
        Username: req.body.Username,
        Email: req.body.Email,
        PasswordHash: req.body.PasswordHash 
    }; 

    //User is defined as a sequalize object and call the create function
    // instead of fidgeting with big sql strings.
    User.create(user).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Something horrible happened when adding a user."
        });
    });
  
};


// User login function  works at http://localhost:8090/api/Users/login
exports.login = async (req, res) => {
    const { Username, Email, PasswordHash } = req.body;
    
    if (!Username && !Email) {
        return res.status(400).send({
            message: "Username or email is required for login."
        });
    }

    try {
        let user;
        if (Username) {
            user = await User.findOne({ where: { Username } });
        } else if (Email) {
            user = await User.findOne({ where: { Email } });
        }

        if (!user) {
            return res.status(404).send({
                message: "User not found."
            });
        }

        if (user.PasswordHash !== PasswordHash) {
            return res.status(401).send({
                message: "Incorrect password."
            });
        }

        // Successful login
        res.send({
            message: "Login successful.",
            user
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "An error occurred during login."
        });
    }
};
// Front end call of the login function 
//      axios.get("http://localhost:8080/login", {
//        params: {
//          Username: "example_username", // Provide the username here
//          password: "example_password" // Provide the password here
//        }
//      })
//        .then(response => {
//          console.log(response.data);
//        })
//        .catch(error => {
//          console.error(error);
//        });

// Retrieve all Users from the data base 
// OR if given a request parameter condition it will find all Like the condition. 
// Find all users with the user name like.
exports.findAllOrOne= (req, res) => {
    const Username = req.body.Username;
    const Email = req.body.Email;
    var UsernameCondition = Username? { Username: { [Op.like]: `%${Username}%` } } : null;
    var EmailCondition = Email ? { Email : { [Op.like]: `%${Email}%` } } : null;

    if(Username){
        User.findAll({ where: UsernameCondition})
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
        User.findAll({ where: EmailCondition })
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
        User.findAll()
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

    User.findByPk(id)
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
    const id = req.params.id;
  
    User.update(req.body, {
      where: { id: id }
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
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    User.destroy({
      where: { UserID: id }
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
    User.destroy({
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
// Add more export functions as needed, give chat gpt the code above as context, and ask for a specific output. 
// Or do it the hard way idk. 


//example call
//db.User.findAll();