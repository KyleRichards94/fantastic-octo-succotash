
module.exports = app => {
    const Users = require("../controllers/users.controller.js");
    // add cart
    //add post
    // add comment
    // etc. when the model is finished. Simular to the big XML file in javabeans. 
  
    var router = require("express").Router();
  

    // Create a new User
    router.post("/", Users.create);
  
    // Retrieve all Users
    router.get("/", Users.findAllOrOne);

    // login via Email || Username ++ password
    router.get("/", Users.login);
  
    // Retrieve a single User with id
    router.get("/:id", Users.findOneByID);
  
    // Update a User with id
    router.put("/:id", Users.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", Users.delete);
  
    // Delete all Tutorials
    router.delete("/", Users.deleteAll);
  
    app.use('/api/Users', router);
  };


  // If you get this heinous error, it means your router functions do not match your controller export functions. Names must match. 
  
 // Error: Route.get() requires a callback function but got a [object Undefined]
 //   at Route.<computed> [as get] (C:\Vue Apps\nodevue\node_modules\express\lib\router\route.js:211:15)
 //   at proto.<computed> [as get] (C:\Vue Apps\nodevue\node_modules\express\lib\router\index.js:521:19)
 //   at module.exports (C:\Vue Apps\nodevue\app\routes\users.routes.js:21:12)
 //   at Object.<anonymous> (C:\Vue Apps\nodevue\server.js:35:42)
 //   at Module._compile (node:internal/modules/cjs/loader:1256:14)
 //   at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
 //   at Module.load (node:internal/modules/cjs/loader:1119:32)
 //   at Module._load (node:internal/modules/cjs/loader:960:12)
 //   at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
 //   at node:internal/main/run_main_module:23:47