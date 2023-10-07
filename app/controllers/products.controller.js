const db = require("../models"); //DB exists in the index.js folder. 
const products = db.products;   // The model this controller represents.
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
    //we're gonna add a new product
    ////if validation was define a new product. 
    const newProduct = {
       /*  Username: req.body.Username,
        Email: req.body.Email,
        PasswordHash: req.body.PasswordHash, */
        ProductID: req.body.ProductID,
        ProductName: req.body.ProductName,
        Description: req.body.Description,
        Price: req.body.Price
    }; 

    //User is defined as a sequalize object and call the create function
    // instead of fidgeting with big sql strings.
    products.create(newProduct).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Something horrendous happened when adding a product."
        });
    });
};
//delete a product based on its name
exports.delete = (req, res) => {
    //we set a variable to store the ProductID passed from the front end
    const inputtedProductID = req.params.ProductID;
  
    products.destroy({
        //where the ProductID column's row contains the inputtedProductID
      where: { ProductID: inputtedProductID }
    })
    //it's going to return the number of rows deleted or affected so that's
    //what the ".then" code deals with.
      .then(num => {
        if (num == 1) {
          res.send({
            message: "The product was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete the product "${inputtedProductID}". The product name does not exist`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Could not delete product with name: " + inputtedProductID
        });
      });
  };