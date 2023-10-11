const db = require("../models"); //DB exists in the index.js folder. 
const products = db.products;   // The model this controller represents.
const Op = db.Sequelize.Op; // sql operators
const posts = db.posts;   // The model this controller represents.


const fs = require('fs');
const path = require('path');

const { v4: uuidv4 } = require('uuid'); // Import the uuid package for generating unique IDs
// Create and Save a new User
exports.create = (req, res) => {
  const post = {
      userId: req.body.userId,
      title: req.body.title,
      description: req.body.description,
      imagePath: "",
      objFilePath: ""
  };

  const newProduct = {
    /*  Username: req.body.Username,
     Email: req.body.Email,
     PasswordHash: req.body.PasswordHash, */
    productId: req.body.productId,
    productName: req.body.productName,
    description: req.body.description,
    price: req.body.price,
    imageLocation: ""
  };

      // Generate unique filenames for objFile and imageFile
      
      const imageFileExt = path.extname(req.files.imageFile.name);
  
    
      const imageFileName = `${uuidv4()}${imageFileExt}`;
      // Save the files to a specified directory
      const uploadDir = path.join(__dirname, 'FileSystem');
     
      const imageFilePath = path.join(uploadDir, imageFileName);
    //console.log('Request Object:', req);
    //console.log('objFile:', req.files.objFile);

    fs.mkdirSync(uploadDir, { recursive: true });
 

      req.files.imageFile.mv(imageFilePath);
    
    
    newProduct.imageLocation = '/app/controllers/FileSystem/'+imageFileName;
    
    // Now you can save post data to the database using Sequelize
    products.create(newProduct)
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
    imageLocation: "/app/controllers/FileSystem/5da79380-3b2f-42b6-9136-c301a7d2adbc.png"
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
exports.findAll = (req, res) => {
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
exports.findById = (req, res) => {
  const productId = req.body.productId;
  products.findByPk(productId).then((data) => {
    if (!data) {
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