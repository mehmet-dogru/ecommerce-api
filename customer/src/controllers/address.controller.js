const httpStatus = require("http-status");
const addressService = require("../services/address.service");
const customerService = require("../services/customer.service");
const ApiError = require("../responses/error.response");
const successResponse = require("../responses/success.response");

class AddressController {
  async addAddress(req, res, next) {
    try {
      const customer = await customerService.findById(req.userId);
      if (!customer) return next(new ApiError("Customer not found", httpStatus.NOT_FOUND));

      const { street, postalCode, city, country } = req.body;
      const address = await addressService.create({ street, postalCode, city, country });

      customer.address.push(address);
      await customer.save();

      successResponse(res, httpStatus.OK, address);
    } catch (err) {
      return next(new ApiError(err.message, httpStatus.BAD_REQUEST));
    }
  }
}

module.exports = new AddressController();
