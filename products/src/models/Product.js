const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String },
    desc: { type: String },
    banner: { type: String },
    type: { type: String },
    unit: { type: Number },
    price: { type: Number },
    available: { type: Boolean },
    suplier: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
