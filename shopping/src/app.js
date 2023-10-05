const express = require("express");
const config = require("./config/index");

config();

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({ msg: "Hello from Shopping Service" });
});

app.listen(process.env.PORT, () => {
  console.log(`Shopping Service running port on ${process.env.PORT}`);
});
