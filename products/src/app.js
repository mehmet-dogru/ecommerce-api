const express = require("express");
const config = require("./config/index");

config();

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello from Products Service" });
});

app.listen(process.env.PORT, () => {
  console.log(`Products Service running port on ${process.env.PORT}`);
});
