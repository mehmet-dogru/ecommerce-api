const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customer.controller");
const validate = require("../middlewares/validate.middleware");
const authenticate = require("../middlewares/authenticate.middleware");
const validationCustomerSchema = require("../validations/customer.validation");

router.post("/register", validate(validationCustomerSchema.registerSchema), customerController.register);
router.post("/login", validate(validationCustomerSchema.loginSchema), customerController.login);

router.get("/profile", authenticate, customerController.profile);

router.get("/wishlist", authenticate, customerController.wishlist);

module.exports = router;
