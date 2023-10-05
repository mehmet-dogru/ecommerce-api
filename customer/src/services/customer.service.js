const BaseService = require("./base.service");
const BaseModel = require("../models/Customer");

class CustomerService extends BaseService {
  constructor() {
    super(BaseModel);
  }

  list(page, limit, where) {
    const customers = BaseModel.find(where || {})
      .limit(limit * 1)
      .skip((page - 1) * limit);

    return customers;
  }
}

module.exports = new CustomerService();
