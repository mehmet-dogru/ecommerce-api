const BaseService = require("./base.service");
const BaseModel = require("../models/Product");

class ProductService extends BaseService {
  constructor() {
    super(BaseModel);
  }

  list(page, limit, where) {
    const products = BaseModel.find(where || {})
      .limit(limit * 1)
      .skip((page - 1) * limit);

    return products;
  }
}

module.exports = new ProductService();
