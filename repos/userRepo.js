const User = require("../models/User");

const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    throw err;
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw err;
  }
};

const getSeniorUsers = async () => {
  try {
    const users = await User.find({ age: { $gte: 60 } });
    return users;
  } catch (err) {
    throw err;
  }
};

const createUser = async (username, email, password) => {
  try {
    const user = new User({ username, email, password });
    await user.save();
    return user;
  } catch (err) {
    throw err;
  }
};

const addProductToUser = async (userId, productId) => {};

const deleteUser = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (err) {
    throw err;
  }
};

const updateUser = async (id, body) => {
  const user = await User.findByIdAndUpdate(id, body);
  return user;
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  getSeniorUsers,
  addProductToUser,
  deleteUser,
  updateUser,
  getUserByEmail,
};
