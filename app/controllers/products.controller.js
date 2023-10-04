const db = require("../models"); //DB exists in the index.js folder. 
const products = db.products;   // The model this controller represents.
const Op = db.Sequelize.Op; // sql operators

// Create and Save a new User
exports.addProduct = (req, res) => {
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
      //  ProductID: req.body.ProductID,
        ProductName: req.body.ProductName,
        Description: req.body.Description,
        Price: req.body.Price
    }; 

    //User is defined as a sequalize object and call the create function
    // instead of fidgeting with big sql strings.
    users.create(newProduct).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Something horrible happened when adding a product."
        });
    });
  
};