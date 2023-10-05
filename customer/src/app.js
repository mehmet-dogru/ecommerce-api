const express = require("express");
const config = require("./config/index");

config();

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello from Customer Service" });
});

app.listen(process.env.PORT, () => {
  console.log(`Customer Service running port on ${process.env.PORT}`);
});
