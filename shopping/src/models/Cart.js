const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    customerId: { type: String },
    items: [
      {
        product: {
          _id: {
            type: String,
            required: true,
          },
          name: { type: String },
          desc: { type: String },
          banner: { type: String },
          type: { type: String },
          unit: { type: Number },
          price: { type: Number },
          suplier: { type: String },
        },
        unit: {
          type: Number,
          require: true,
        },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
