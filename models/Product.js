const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Product", productSchema);
