const { v4: uuidv4 } = require("uuid");
const User = require("../models/users.model");

const getAllUser = async (req, res) => {
  try {
    const allUser = await User.find();
    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const findUser = await User.findOne({ id: userId });
    res.status(200).json(findUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await new User({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
    });
    await newUser.save();

    const allUser = await User.find();
    res.status(201).json(allUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const findUser = await User.findOne({ id: req.params.id });
    findUser.name = req.body.name;
    findUser.email = req.body.email;
    await findUser.save();
    res.status(200).json(findUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const findUser = await User.deleteOne({ id: req.params.id });
    const allUser = await User.find();
    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllUser, getOneUser, createUser, updateUser, deleteUser };
