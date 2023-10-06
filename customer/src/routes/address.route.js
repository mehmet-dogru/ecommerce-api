const express = require("express");
const router = express.Router();

const addressController = require("../controllers/address.controller");
const validate = require("../middlewares/validate.middleware");
const addressValidationSchema = require("../validations/address.validation");
const authenticate = require("../middlewares/authenticate.middleware");

router.post("/", authenticate, validate(addressValidationSchema.createSchema), addressController.addAddress);
router.get("/", authenticate);

module.exports = router;
