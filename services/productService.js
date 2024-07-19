const productRepo = require("../repos/productRepo");
const userRepo = require("../repos/userRepo");

const getProducts = async () => {
  return await productRepo.getProducts();
};
const getProductOwner = async (id) => {
  return await productRepo.getProductOwner(id);
};
const createProduct = async (name, price, ownerId) => {
  const product = await productRepo.createProduct(name, price, ownerId);
  await userRepo.addProductToUser(ownerId, product._id);
  return product;
};

const deleteProduct = async (id) => {
  return await productRepo.deleteProduct(id);
};

const updateProduct = async (id, body) => {
  return await productRepo.updateProduct(id, body);
};

module.exports = {
  getProducts,
  getProductOwner,
  createProduct,
  deleteProduct,
  updateProduct,
};
