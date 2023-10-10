const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const errorHandler = require("./middlewares/error-handler.middleware");
const config = require("./config/index");
const loaders = require("./loaders");
const { productRoutes } = require("./routes");

config();
loaders();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello from Products Service" });
});

app.use("/", productRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Products Service running port on ${process.env.PORT}`);
});
