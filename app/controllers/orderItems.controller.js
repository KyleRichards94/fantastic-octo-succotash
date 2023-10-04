
const db = require("../models"); //DB exists in the index.js folder. 
const orderItems = db.orderItems;   // The model this controller represents.
const Op = db.Sequelize.Op; // sql operators

//creates 1 order item
exports.create = (req, res) => {
    const orderItem = {
      orderId: req.body.orderId,
      productId: req.body.productId,
      quantity: req.body.quantity,
      price: req.body.price,
    };
  
    orderItems.create(orderItem)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "The order item could not be created",
        });
      });
  };
  
  //finds all order items, useless
  exports.findAll = (req, res) => {
    orderItems.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Could not retrieve all order items.",
        });
      });
  };

  //finds 1 order item, useless
  exports.findOne = (req, res) => {
    const orderItemId = req.params.orderItemId;
  
    orderItems.findByPk(orderItemId)
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Order item with orderItemId ${orderItemId} not found`,
          });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "A horrible error occurred",
        });
      });
  };

  //Find all items by order ID. used for checkout and looking at past orders
  exports.findByOrderId = (req, res) => {
    const orderId = req.params.orderId;
  
    orderItems.findAll({
      where: {
        orderId: orderId,
      },
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "The order items could not be found.",
        });
      });
  };

  // Update an order item by orderItemId
exports.update = (req, res) => {
    const orderItemId = req.params.orderItemId;
  
    orderItems.update(req.body, {
      where: { orderItemId: orderItemId },
    })
      .then((num) => {
        if (num == 1) {
          res.send({ message: "Order item was successfully updated" });
        } else {
          res.status(404).send({
            message: `Order item with orderItemId ${orderItemId} not found`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "An error occurred while updating the order item",
        });
      });
  };

  // Delete an order item by orderItemId
exports.delete = (req, res) => {
    const orderItemId = req.params.orderItemId;
  
    orderItems.findByPk(orderItemId)
      .then((orderItem) => {
        if (!orderItem) {
          res.status(404).send({
            message: `Order item with orderItemId ${orderItemId} not found`,
          });
        } else {
          orderItem
            .destroy()
            .then(() => {
              res.send({
                message: "Order item was deleted successfully",
              });
            })
            .catch((err) => {
              res.status(500).send({
                message: err.message || "An error occurred while deleting the order item",
              });
            });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "An error occurred while retrieving the order item",
        });
      });
  };

  //deletes all order items with order id
  exports.destroyCart = (req, res) => {
    const orderId = req.params.orderId;
  
    orderItems.destroy({
      where: {
        orderId: orderId,
      },
    })
      .then((num) => {
        if (num > 0) {
          res.send({ message: `Cart with orderId ${orderId} was successfully destroyed` });
        } else {
          res.status(404).send({
            message: `Cart with orderId ${orderId} not found`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "An error occurred while destroying the cart",
        });
      });
  };