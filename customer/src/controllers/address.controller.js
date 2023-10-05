const httpStatus = require("http-status");
const addressService = require("../services/address.service");
const ApiError = require("../responses/error.response");
const successResponse = require("../responses/success.response");

class AddressController {
  async create(req, res, next) {
    try {
    } catch (err) {
      return next(new ApiError(err.message, httpStatus.BAD_REQUEST));
    }
  }

  async list(req, res, next) {
    try {
    } catch (err) {
      return next(new ApiError(err.message, httpStatus.BAD_REQUEST));
    }
  }
}

module.exports = new AddressController();
