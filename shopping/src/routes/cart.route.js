const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart.controller");
const validate = require("../middlewares/validate.middleware");
const authenticate = require("../middlewares/authenticate.middleware");
const validationCartSchema = require("../validations/cart.validation");

router.post("/", validate(), cartController.create);

module.exports = router;
