const userRepo = require("../repos/userRepo");
const bcrypt = require("bcrypt");
const UnauthorizedError = require("../Errors/UnauthorizedError");
const jwt = require("jsonwebtoken");

const getUsers = async () => {
  return await userRepo.getUsers();
};

const getUserById = async (id) => {
  return await userRepo.getUserById(id);
};

const signup = async (username, email, password) => {};

const login = async (email, password) => {};

const deleteUser = async (id) => {
  return await userRepo.deleteUser(id);
};

const updateUser = async (id, body) => {
  return await userRepo.updateUser(id, body);
};

module.exports = {
  getUsers,
  getUserById,
  signup,
  login,
  deleteUser,
  updateUser,
};
