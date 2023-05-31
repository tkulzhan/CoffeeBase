const Joi = require("joi");
const Order = require("../models/orderModel");
const { mongo } = require("mongoose");

const orderValidationSchema = Joi.object({
  name: Joi.string().min(5).max(125).required,
  equipment: Joi.string().min(5).max(125).required,
  ingredients: Joi.string().min(5).max(125).required,
});

const createOrder = async (req, res) => {
  try {
    const value = await orderValidationSchema.validateAsync(req.body);
  } catch (e) {
    console.error(e.message);
  }
  const order = new Order({
    name: req.body.name,
    equipment: req.body.equipment,
    ingredients: req.body.ingredients,
  });
  try {
    const result = await order.save();
    console.log(result);
  } catch (e) {
    res.status(500).send("Something failed!");
  }
};

const getListOfOrders = async (req, res) => {
  const listOfOrders = await Order.find().select(
    "title description price"
  );
  if (!listOfOrders) res.status(400).send("Bad request!");
  res.json(listOfOrders);
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) res.status(400).send("Bad request!");
    res.json(order);
  } catch (e) {
    res.json({})
  }
};

const updateOrderById = async (req, res) => {
  try {
    const result = await Order.updateOne(
      { _id: req.params.orderId },
      {
        $set: {
          name: req.body.name,
          equipment: req.body.equipment,
          ingredients: req.body.ingredients,
        },
      }
    );
    console.log(result);
  } catch (e) {
    res.status(400).send("BadRequest");
  }
};

const removeOrder = async (req, res) => {
  try {
    const deleteOrder = await Order.deleteMany({
      _id: req.params.orderId,
    });
    console.log(deleteOrder);
  } catch (e) {
    res.status(400).send("BadRequest");
  }
};

module.exports = {
  createOrder,
  getListOfOrders,
  getOrderById,
  updateOrderById,
  removeOrder,
};