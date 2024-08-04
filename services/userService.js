const userRepo = require("../repos/userRepo");

const getUsers = async () => {
  try {
    const users = await userRepo.getUsers();
    return users;
  } catch (err) {
    throw err;
  }
};

const getUserById = async (id) => {
  try {
    const user = await userRepo.getUserById(id);
    return user;
  } catch (err) {
    throw err;
  }
};

const createUser = async (username, email, password) => {
  try {
    const user = await userRepo.createUser(username, email, password);
    return user;
  } catch (err) {
    throw err;
  }
};

const deleteUser = async (id) => {
  try {
    const user = await userRepo.deleteUser(id);
    return user;
  } catch (err) {
    throw err;
  }
};

const updateUser = async (id, body) => {
  const user = await userRepo.updateUser(id, body);
  return user;
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
};
