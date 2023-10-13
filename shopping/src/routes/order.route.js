const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order.controller");
const validate = require("../middlewares/validate.middleware");
const orderValidationSchema = require("../validations/order.validation");
const authenticate = require("../middlewares/authenticate.middleware");

router.post("/", authenticate, validate(), orderController.create);

module.exports = router;
