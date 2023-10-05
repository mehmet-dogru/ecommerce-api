const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const config = require("./config/index");
const errorHandler = require("./middlewares/error-handler.middleware");
const loaders = require("./loaders");

config();
loaders();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello from Customer Service" });
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Customer Service running port on ${process.env.PORT}`);
});
