const userService = require("../services/userService");
const jsend = require("jsend");
const { validationResult } = require("express-validator");

const signup = async (req, res, next) => {};

const login = async (req, res, next) => {};

const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();
    res.json(jsend.success(users));
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(jsend.success(user));
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await userService.deleteUser(req.params.id);
    res.json(jsend.success(user));
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(jsend.fail({ errors: errors.array() }));
  }
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(jsend.success(user));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  getUserById,
  signup,
  deleteUser,
  updateUser,
  login,
};
