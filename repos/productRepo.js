const Product = require("../models/Product");

const getProducts = async () => {
  try {
    const products = await Product.find({}, { __v: 0 }).populate("owner");
    console.log(products);
    return products;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getProductOwner = async (id) => {
  try {
    const product = await Product.findById(id).populate("owner", "name");
    return product.owner;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createProduct = async (name, price, ownerId) => {
  try {
    const product = new Product({ name, price, owner: ownerId });
    await product.save();
    return product;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteProduct = async (id) => {
  try {
    return await Product.findByIdAndDelete(id);
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateProduct = async (id, body) => {
  try {
    return await Product.findByIdAndUpdate(id, body, { new: true });
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  getProducts,
  getProductOwner,
  createProduct,
  deleteProduct,
  updateProduct,
};
