const Joi = require("joi");
const Client = require("../models/clientModel");
const bcrypt = require("bcrypt");

const clientValidationSchema = Joi.object({
  name: Joi.string().min(5).max(125).required(),
  password: Joi.string().min(5).max(125).required(),
});

const registerClient = async (req, res) => {
  try {
    const hashed = await bcrypt.hash(req.body.password, 6);
    const client = new Client({
      name: req.body.name,
      bio: "",
      email: req.body.email,
      password: hashed,
      roles: ["user"],
    });
    console.log(client);
    await client.save();
    res.send(client);
  } catch (err) {
    res.send(err);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await Client.findOne({ email: email });
    if (!candidate) {
      return res.status(400).send({ message: "User not found!" });
    }
    const c = await bcrypt.compare(password, candidate.password);
    if (!c) {
      return res.status(400).send({ message: "Wring password!" });
    }
    res.send(candidate);
  } catch (e) {
    res.status(500).send("error");
  }
};

const createClient = async (req, res) => {
  try {
    const value = await clientValidationSchema.validateAsync(req.body);
  } catch (e) {
    console.error(e.message);
  }
  const client = new Client({
    name: req.body.name,
    bio: req.body.bio,
    email: req.body.email,
    password: req.body.password,
    order: req.params.orderId,
  });
  try {
    const result = await client.save();
    console.log(result);
  } catch (e) {
    console.error(e.message);
  }
};

const getListOfClients = async (req, res) => {
  const listOfClients = await Client.find()
    .populate("order", "name name equipment ingredients")
    .select("name order");
  if (!listOfClients) res.status(400).send("Bad request!");
  res.json(listOfClients);
};

const getClientById = async (req, res) => {
  const client = await Client.find({ _id: req.params.clientId });
  if (!client) res.status(400).send("Client was not found!");
  res.json(client);
};

const changeClientOrder = async (req, res) => {
  const client = await Client.findById(req.params.clientId);
  client.order = req.params.orderId;
  try {
    const result = await client.save();
    console.log(result);
  } catch (e) {
    console.error(e.message);
  }
};

const updateClientById = async (req, res) => {
  try {
    const result = await Client.updateOne(
      { _id: req.params.clientId },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          bio: req.body.bio,
        },
      }
    );
    res.status(200).send({ m: "Success" });
  } catch (e) {
    res.status(400).send("BadRequest");
  }
};

const removeClient = async (req, res) => {
  try {
    const deleteClient = await Client.deleteMany({
      _id: req.params.clientId,
    });
    console.log(deleteClient);
  } catch (e) {
    res.status(400).send("BadRequest");
  }
};

module.exports = {
  registerClient,
  createClient,
  getListOfClients,
  getClientById,
  updateClientById,
  removeClient,
  changeClientOrder,
  login,
};
