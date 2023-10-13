const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    orderId: { type: String },
    customerId: { type: String },
    amount: { type: Number },
    status: { type: String },
    items: [
      {
        product: {
          _id: { type: String, require: true },
          name: { type: String },
          desc: { type: String },
          banner: { type: String },
          type: { type: String },
          unit: { type: Number },
          price: { type: Number },
          suplier: { type: String },
        },
        unit: { type: Number, require: true },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
