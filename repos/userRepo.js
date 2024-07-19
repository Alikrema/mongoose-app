const User = require("../models/User");
const EmailAlreadyExistsError = require("../Errors/EmailAlreadyExistsError");

const getUsers = async () => {
  try {
    const users = await User.find({}, { __v: 0 }).populate("products");
    return users;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getSeniorUsers = async () => {
  try {
    const users = await User.find({ age: { $gte: 60 } });
    return users;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getAgeCount = async (age) => {
  try {
    //group by age and count
    const result = await User.aggregate([
      { $match: { age: { $gte: age } } },
      { $group: { _id: "$age", count: { $sum: 1 } } },
    ]);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createUser = async (username, email, password) => {
  try {
    const user = new User({ username, email, password });
    await user.save();
    return user;
  } catch (err) {
    if (err.code === 11000) {
      throw new EmailAlreadyExistsError();
    }
    throw new Error(err.message);
  }
};

const addProductToUser = async (userId, productId) => {
  return await User.findByIdAndUpdate(
    userId,
    { $push: { products: productId } },
    { new: true }
  );
};

const deleteUser = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateUser = async (id, body) => {
  try {
    const user = await User.findByIdAndUpdate(id, body, { new: true });
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({
      email,
    });
    return user;
  } catch (err) {
    throw new Error(err.message);
  }
};

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
