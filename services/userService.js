const userRepo = require("../repos/userRepo");
const bcrypt = require("bcrypt");
const UnauthorizedError = require("../Errors/UnauthorizedError");

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

const verifyUser = async (email, password) => {
  try {
    const user = await userRepo.getUserByEmail(email);
    if (!user) {
      throw new UnauthorizedError("Invalid email");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedError("Invalid password");
    }
    return user;
  } catch (err) {
    if (err instanceof UnauthorizedError) {
      throw err;
    }
    throw new Error(err.message);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  verifyUser,
};
