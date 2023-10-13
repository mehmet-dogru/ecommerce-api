const { connectDB: connectMongoDB } = require("./mongodb");

module.exports = () => {
  connectMongoDB();
};
