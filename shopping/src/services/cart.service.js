const BaseService = require("./base.service");
const BaseModel = require("../models/Cart");

class CartService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new CartService();
