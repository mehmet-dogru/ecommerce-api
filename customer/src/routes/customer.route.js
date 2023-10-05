const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customer.controller");
const validate = require("../middlewares/validate.middleware");
const authenticate = require("../middlewares/authenticate.middleware");

router.post("/", authenticate);
router.get("/", authenticate);

module.exports = router;
