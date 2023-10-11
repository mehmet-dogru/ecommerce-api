const httpStatus = require("http-status");
const { passwordToHash, generateAccessToken } = require("../scripts/utils/helper");
const customerService = require("../services/customer.service");
const ApiError = require("../responses/error.response");
const successResponse = require("../responses/success.response");
const rabbitmq = require("../message-broker/rabbitmq-connection");

class CustomerController {
  async register(req, res, next) {
    try {
      const hash = passwordToHash(req.body.password);

      const customer = await customerService.create({ ...req.body, address: [], password: hash });

      successResponse(res, httpStatus.CREATED, customer);
    } catch (err) {
      return next(new ApiError(err.message, httpStatus.BAD_REQUEST));
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const hashedPassword = passwordToHash(password);

      const customer = await customerService.findOne({ email, password: hashedPassword });

      if (!customer) return next(new ApiError("Invalid email or password", httpStatus.BAD_REQUEST));

      const token = generateAccessToken(customer);
      successResponse(res, httpStatus.OK, token);
    } catch (err) {
      return next(new ApiError(err.message, httpStatus.BAD_REQUEST));
    }
  }

  async profile(req, res, next) {
    try {
      const customer = await customerService.findById(req.userId);
      if (!customer) return next(new ApiError("Profile not found", httpStatus.NOT_FOUND));

      successResponse(res, httpStatus.OK, customer);
    } catch (err) {
      return next(new ApiError(err.message, httpStatus.BAD_REQUEST));
    }
  }

  async wishlist(req, res, next) {
    try {
      await rabbitmq.connect();
      rabbitmq.consumeMessages("wishlist_queue", async (message) => {
        try {
          if (message.type === "addWishlist" && message.product) {
            const customer = await customerService.findById(message.customerId).populate("wishlist");
            if (!customer) {
              console.error("Customer not found, unable to add product to wishlist");
              return;
            }

            const newProduct = {
              name: message.product.name,
              desc: message.product.desc,
              banner: message.product.banner,
              type: message.product.type,
              unit: message.product.unit,
              price: message.product.price,
              available: message.product.available,
              suplier: message.product.suplier,
              createdAt: message.product.createdAt,
              updatedAt: message.product.updatedAt,
            };

            customer.wishlist.push(newProduct);

            await customer.save();

            successResponse(res, httpStatus.OK, { message: `Product added to wishlist` });
          }
        } catch (error) {
          console.error("Error while adding product to wishlist:", error);
        }
      });
    } catch (err) {
      return next(new ApiError(err.message, httpStatus.BAD_REQUEST));
    }
  }
}

module.exports = new CustomerController();
