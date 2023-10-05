const express = require("express");
const router = express.Router();

const addressController = require("../controllers/address.controller");
const validate = require("../middlewares/validate.middleware");
const authenticate = require("../middlewares/authenticate.middleware");

router.post("/", authenticate);
router.get("/", authenticate);

module.exports = router;
