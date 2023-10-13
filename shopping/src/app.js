const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const errorHandler = require("./middlewares/error-handler.middleware");
const config = require("./config/index");
const loaders = require("./loaders");
const { orderRoutes, cartRoutes } = require("./routes");

config();
loaders();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/whoami", (req, res) => {
  return res.status(200).json({ msg: "Hello from Shopping Service" });
});

app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Shopping Service running port on ${process.env.PORT}`);
});
