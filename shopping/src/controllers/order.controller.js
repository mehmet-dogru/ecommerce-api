const httpStatus = require("http-status");
const orderService = require("../services/order.service");
const ApiError = require("../responses/error.response");
const successResponse = require("../responses/success.response");

class OrderController {
  async create(req, res, next) {
    try {
    } catch (err) {
      return next(new ApiError(err.message, httpStatus.BAD_REQUEST));
    }
  }
}

module.exports = new OrderController();
