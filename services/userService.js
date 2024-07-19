const userRepo = require("../repos/userRepo");

const getUsers = async () => {
  return await userRepo.getUsers();
};

const getUserById = async (id) => {
  return await userRepo.getUserById(id);
};

const createUser = async (username, email, password) => {
  return await userRepo.createUser(username, email, password);
};

const deleteUser = async (id) => {
  return await userRepo.deleteUser(id);
};

const updateUser = async (id, body) => {
  return await userRepo.updateUser(id, body);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
