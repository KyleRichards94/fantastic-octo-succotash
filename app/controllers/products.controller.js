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
        productId: req.body.productId,
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price
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
    const inputtedProductId = req.params.productId;
  
    products.destroy({
        //where the ProductID column's row contains the inputtedProductID
      where: { productId: inputtedProductId }
    })
    //it's going to return the number of rows deleted or affected so that's
    //what the ".then" code deals with.
      .then(num => {
        if (num == 1) {
          res.send({
            message: 'The product was deleted successfully!'
          });
        } else {
          res.send({
            message: `Cannot delete the product "${inputtedProductId}". The product name does not exist`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Could not delete product with name: " + inputtedProductId
        });
      });
  };

  // products.controller.js
// ...

// Update a product by ProductID
exports.update = (req, res) => {
    const productId = req.params.productId;
  
    // Define the updated product data based on the request body
    const updatedProduct = {
      productName: req.body.productName,
      description: req.body.description,
      price: req.body.price,
      // Add other fields you want to update
    };
  
    // Use the update method provided by Sequelize
    products
      .update(updatedProduct, {
        where: { productId: productId },
      })
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Product updated successfully",
          });
        } else {
          res.send({
            message: `Cannot update the product with ProductID ${productId}. It may not exist.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            `Could not update product with ProductID: ${productId}`,
        });
      });
  };
  

  //return all products
exports.findAll = (req,res) => {
  products.findAll().then((data) => {
      res.send(data);
  }).catch(err => {
      res.status(500).send({
          message:
          err.message || "Could not retrieve posts."
      });
  });
};

  //find a product by ID.
  exports.findById =(req, res) => {
    const productId = req.body.productId;
    products.findByPk(productId).then((data) => {
      if(!data){
        res.status(404).send({
          message: `no such product by ${productId} exists`
        })
      } else {
        res.send(data);
      }
    }).catch(err => {
      res.status(500).send({
        message:
          err.message + "Big yikes!"
      });
    });
  };