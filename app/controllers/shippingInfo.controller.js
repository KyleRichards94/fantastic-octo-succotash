const db = require("../models"); //DB exists in the index.js folder. 
const shippingInfo = db.shippingInfo;   // The model this controller represents.
const Op = db.Sequelize.Op; // sql operators

//Create a new shipping info
exports.create = (req, res) => {
    const _shippingInfo = {
        userId: req.body.userId,
        fullName: req.body.fullName,
        address:req.body.address,
        city: req.body.city,
        state: req.body.state,
        postalCode: req.body.postalCode,
        country: req.body.country
    }

    shippingInfo.create(_shippingInfo).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message + "shipping info could not be created >:("
        });
    });
};

exports.findAll = (req, res) => {
    const userID = req.body.userId;

    shippingInfo.findAll({
        where: {
            userId: userID
        }
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message + "shipping info cannot be created Big sad."
        });
    });
};