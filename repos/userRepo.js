const User = require("../models/User");

const getUsers = async () => {};

const getUserById = async (id) => {};

const getSeniorUsers = async () => {};

const getAgeCount = async (age) => {};

const createUser = async (username, email, password) => {};

const addProductToUser = async (userId, productId) => {};

const deleteUser = async (id) => {};

const updateUser = async (id, body) => {};

const getUserByEmail = async (email) => {};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  getSeniorUsers,
  getAgeCount,
  addProductToUser,
  deleteUser,
  updateUser,
  getUserByEmail,
};
