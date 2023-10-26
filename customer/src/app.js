const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const config = require("./config/index");
const errorHandler = require("./middlewares/error-handler.middleware");
const loaders = require("./loaders");
const { customerRoutes, addressRoutes } = require("./routes");
const initializeBackgroundProcesses = require("./scripts/utils/initialize-consumer");

config();
loaders();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
initializeBackgroundProcesses();

app.get("/whoami", (req, res) => {
  return res.status(200).json({ msg: "Hello from Customer Service" });
});

app.use("/", customerRoutes);
app.use("/address", addressRoutes);


app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Customer Service running port on ${process.env.PORT}`);
});
