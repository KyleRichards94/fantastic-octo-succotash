const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//db is now linked to the models folder.
const db = require("./app/models/index.js");
//Sync the backend to the nodejs server.
db.sequelize.sync();

//db.sequelize.sync({ force: true }).then(() => {
//    console.log("Drop and re-sync db.");
//  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Succotash!" });
});


//Import all API route paths
// after you finish writing your API import it here or else the app cannot find them.
//require("./app/routes/users.routes.js")(app);

require("./app/routes/posts.routes.js")(app);
require("./app/routes/orders.routes.js")(app);
require("./app/routes/orderItems.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8090;  // default 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

module.exports = app;
// Remember to teset the functionality of the backend at 
// https://www.postman.com/
// input http://localhost:8080/api/-ApiRouteName- 
// and test the functionality. 