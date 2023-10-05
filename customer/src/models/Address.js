const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    street: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
