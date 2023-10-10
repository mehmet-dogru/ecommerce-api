const httpStatus = require("http-status");
const productService = require("../services/product.service");
const ApiError = require("../responses/error.response");
const successResponse = require("../responses/success.response");

class ProductController {
  async create(req, res, next) {
    try {
      const product = await productService.create({ ...req.body });
      successResponse(res, httpStatus.CREATED, product);
    } catch (err) {
      return next(new ApiError(err.message, httpStatus.BAD_REQUEST));
    }
  }

  async getProducts(req, res, next) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const products = await productService.list(page, limit, {});
      if (!products) return next(new ApiError("Product not found", httpStatus.NOT_FOUND));
      successResponse(res, httpStatus.OK, products);
    } catch (err) {
      return next(new ApiError(err.message, httpStatus.BAD_REQUEST));
    }
  }
}

module.exports = new ProductController();
