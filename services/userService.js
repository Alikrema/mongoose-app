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

const signup = async (username, email, password) => {
  try {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const user = await userRepo.createUser(username, email, password);
    return { user, token };
  } catch (err) {
    throw err;
  }
};

const deleteUser = async (id) => {
  return await userRepo.deleteUser(id);
};

const updateUser = async (id, body) => {
  return await userRepo.updateUser(id, body);
};

const login = async (email, password) => {
  try {
    const user = await userRepo.getUserByEmail(email);
    if (!user) {
      throw new UnauthorizedError("Invalid email");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedError("Invalid password");
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return { user, token };
  } catch (err) {
    if (err instanceof UnauthorizedError) {
      throw err;
    }
    throw err;
  }
};

module.exports = {
  getUsers,
  getUserById,
  signup,
  login,
  deleteUser,
  updateUser,
};
