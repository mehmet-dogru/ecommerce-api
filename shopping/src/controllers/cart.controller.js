const httpStatus = require("http-status");
const cartService = require("../services/cart.service");
const ApiError = require("../responses/error.response");
const successResponse = require("../responses/success.response");

class CartController {
  async create(req, res, next) {
    try {
    } catch (err) {
      return next(new ApiError(err.message, httpStatus.BAD_REQUEST));
    }
  }
}

module.exports = new CartController();
