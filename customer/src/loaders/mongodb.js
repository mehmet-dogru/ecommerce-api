const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MongoDB Connection SUCCESS!");
    })
    .catch(() => {
      console.log("MongoDB Connection FAILED!");
    });
};

module.exports = {
  connectDB,
};
