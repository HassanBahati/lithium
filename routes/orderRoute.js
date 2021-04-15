//imports
const express = require('express');
const Orders = require('../models/orderModel');

//instantiating express router
const router = express.Router();

//ROUTES
//gets all orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.json({ message: err });
  }
});

//post submits an order
router.post('/', async (req, res) => {
  const order = new Orders({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedOrder = await order.save();
    res.json(savedOrder);
  } catch (err) {
    res.json({ message: err });
  }
});

//get a specific order
router.get('/:orderId', async (req, res) => {
  try {
    const order = await Orders.findById(req.params.orderId);
    res.json(order);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete specifc order
router.delete('/:orderId', async (req, res) => {
  try {
    const removedOrder = await Orders.remove({ _id: req.params.orderId });
    res.json(removedOrder);
  } catch (err) {
    res.json({ message: err });
  }
});

//update an order
router.patch('/:orderId', async (req, res) => {
  try {
    const updatedOneOrder = await Orders.updateOne(
      { _id: req.params.orderId },
      { $set: { title: req.params.title } }
    );
    res.json(updatedOneOrder);
  } catch (err) {
    res.json({ message: err });
  }
});

//exporting module- making available in other files
module.exports = router;
