const BaseService = require("./base.service");
const BaseModel = require("../models/Order");

class OrderService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new OrderService();
