const productRepo = require("../repos/productRepo");
const userRepo = require("../repos/userRepo");

const getProducts = async () => {};
const getProductOwner = async (id) => {};
const createProduct = async (name, price, ownerId) => {};
const deleteProduct = async (id) => {};
const updateProduct = async (id, body) => {};

module.exports = {
  getProducts,
  getProductOwner,
  createProduct,
  deleteProduct,
  updateProduct,
};
