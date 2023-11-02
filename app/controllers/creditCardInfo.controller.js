
const db = require("../models"); //DB exists in the index.js folder. 
const creditCardInfo = db.creditCardInfo;   // The model this controller represents.
const Op = db.Sequelize.Op; // sql operators

//Create a credit card info

exports.create = (req, res) => {

    //Credit card request body format. 
    const creditCard = {
        userId: req.body.userId,
        cardNumber: req.body.cardNumber,
        expiryDate: req.body.expiryDate,
        cardHolderName: req.body.cardHolderName,
        billingAddress: req.body.billingAddress,
        CVC: req.body.CVC,
    }
    //Sequalize the response. 
    creditCardInfo.create(creditCard)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message + "the card could not be created",
            });
        });
};

//find all creditcard infos where userId == request body
exports.findAll = (req, res) => {
    const userID = req.params.userId;

    creditCardInfo.findAll({
        where: {
            userId: userID,
        }}).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message + "no card info for this userId could be found"
            });
        });
};

