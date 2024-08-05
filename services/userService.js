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
    const token = jwt.sign({ username, email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const user = await userRepo.createUser(username, email, password);
    return { user, token };
  } catch (err) {
    throw err;
  }
};

const login = async (email, password) => {
  try {
    const user = await userRepo.getUserByEmail(email);
    if (!user) {
      throw new UnauthorizedError("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedError("Incorrect Credentials");
    }
    const token = jwt.sign(
      { username: user.username, email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
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

module.exports = {
  getUsers,
  getUserById,
  signup,
  login,
  deleteUser,
  updateUser,
};
