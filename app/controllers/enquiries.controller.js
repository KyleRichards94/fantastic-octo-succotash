const db = require("../models");
const enquiries = db.enquiries;
const Op = db.Sequelize.Op;

// create an enquiry
exports.create = (req, res) => {
    const enquiry = {
        subject: req.body.subject,
        message: req.body.message,
        //date will be ommited from the request. 
    };

    enquiries.create(enquiry).then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Couldn't create an enquiry"
        });
    });
};
// Return all enquiries
exports.findAll = (req, res) => {
    enquiries.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not retrieve enquiries",
            });
        });
};

// Retrieve a single Enquiry by EnquiryID
exports.findOne = (req, res) => {
    const enquiryId = req.params.enquiryId;

    enquiries.findByPk(enquiryId)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Enquiry with EnquiryID ${enquiryId} not found`,
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while retrieving the enquiry",
            });
        });
};

// Update the reply field and set unreplied to false by EnquiryID
exports.update = (req, res) => {
    const enquiryId = req.params.enquiryId;
    const { reply } = req.body;

    enquiries.update({ reply, unreplied: false }, {
        where: { enquiryID: enquiryId }
    })
        .then(num => {
            if (num == 1) {
                res.send({ message: "Reply submitted successfully" });
            } else {
                res.status(404).send({
                    message: `Enquiry with EnquiryID ${enquiryId} not found`,
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while updating the enquiry",
            });
        });
};

// Delete an Enquiry by EnquiryID
exports.delete = (req, res) => {
    const enquiryId = req.params.enquiryId;

    enquiries.findByPk(enquiryId)
        .then(enquiry => {
            if (!enquiry) {
                res.status(404).send({
                    message: `Enquiry with EnquiryID ${enquiryId} not found`,
                });
            } else {
                enquiry
                    .destroy()
                    .then(() => {
                        res.send({ message: "Enquiry was successfully deleted" });
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: err.message || "An error occurred while deleting the enquiry",
                        });
                    });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while retrieving the enquiry",
            });
        });
};
