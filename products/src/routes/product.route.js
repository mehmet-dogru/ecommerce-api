const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");
const validate = require("../middlewares/validate.middleware");
const authenticate = require("../middlewares/authenticate.middleware");
const validationProductSchema = require("../validations/product.validation");

router.post("/", authenticate, validate(validationProductSchema.createSchema), productController.create);
router.get("/list", authenticate, productController.getProducts);

module.exports = router;
