module.exports = app => {
    const enquiries = require("../controllers/enquiries.controller.js");
   
  
    var router = require("express").Router();
    
    // impliment your CRUD
    // Create a new enquiry
    router.post('/enquiries', enquiries.create);

    // Get all enquiries
    router.get('/enquiries', enquiries.findAll);

    // Get an enquiry by ID
    router.get('/enquiries/:enquiryId',  enquiries.findOne);

    // Update an enquiry by ID
    router.put('/enquiries/:enquiryId', enquiries.update);

    // Delete an enquiry by ID
    router.delete('/enquiries/:enquiryId', enquiries.delete);

    app.use('/api/enquiries', router);
  };
