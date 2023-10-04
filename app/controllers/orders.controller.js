
const db = require("../models"); //DB exists in the index.js folder. 
const orders = db.orders;   // The model this controller represents.
const Op = db.Sequelize.Op; // sql operators

//create and save a new order
exports.create = (req, res) => {
    const order = {
        userId: req.body.userId,
        totalAmount: req.body.totalAmount
    };

    orders.create(order).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "the order could not be generated"
        });
    });
};

//return all orders 
exports.findAll = (req,res) => {
    orders.findAll().then((data) => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
            err.message || "Could not retireve all orders."
        });
    });
};

//find one order 
exports.findOne = (req, res) => {
    const orderId = req.params.orderId;

    orders.findByPk(orderId).then((data) => {
        if(!data){
            res.status(404).send({
                message: 'Order with orderId ${orderId} could not be found',
            });
        } else {
            res.send(data);
        }
    }).catch((err) => {
        res.status(500).send({
            message: err.message || 'A horrible error occured',
        });
    });
};

//returns all orders matching the user ID
exports.findByUserId = (req, res) => {
    const userId = req.params.userId;

    orders.findAll({
        where: {
            userId: {
                [Op.eq] : '${userId}',
            },
        },
    }).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "the orders could not be found."
        });
    });
};

//update an order by orderId
//send in the entire cart again, or remove individual order items. 

exports.update = (req, res) => {
    const orderId = req.params.orderId;

    orders.update(req.body, {
        where: { orderId : orderId }
      }).then((num) => {
        if (num == 1) {
          res.send({ message: "Order was successfully updated" });
        } else {
          res.status(404).send({
            message: `Order with orderId ${orderId} not found`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "An error occurred while updating the order",
        });
      });
  };


  //Delete an order by orderId
  exports.delete = (req, res) => {
    const orderId = req.params.orderId;

    orders.findByPk(orderId).then((order) => {
        if(!order){
            res.status(404).send({
                message: 'Order with orderId ${orderId} could not be found',
            });
        } else {
            order.destroy().then(() => {
                res.send({
                    message: "order was deleted successfuly",
                }).catch((err) => {
                    res.send({
                        message: err.message || "an error occured while deleting order."
                    });
                });
            });
        }
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "an error occured while retrieving the order."
        });
    });

  };
