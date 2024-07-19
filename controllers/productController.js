const jsend = require("jsend");
const productService = require("../services/productService");

const getProducts = async (req, res, next) => {
  try {
    const products = await productService.getProducts();
    res.json(jsend.success(products));
  } catch (err) {
    next(err);
  }
};

const getProductOwner = async (req, res, next) => {
  try {
    const owner = await productService.getProductOwner(req.params.id);
    res.json(jsend.success(owner));
  } catch (err) {
    next(err);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const product = await productService.createProduct(
      req.body.name,
      req.body.price,
      req.body.ownerId
    );
    res.json(jsend.success(product));
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const product = await productService.deleteProduct(req.params.id);
    res.json(jsend.success(product));
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    res.json(jsend.success(product));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getProducts,
  getProductOwner,
  createProduct,
  deleteProduct,
  updateProduct,
};
