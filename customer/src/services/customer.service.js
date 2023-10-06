const BaseService = require("./base.service");
const BaseModel = require("../models/Customer");

class CustomerService extends BaseService {
  constructor() {
    super(BaseModel);
  }

  findById(id) {
    return this.BaseModel.findById(id).populate({
      path: "address",
      select: "-createdAt -updatedAt",
    });
  }

  list(page, limit, where) {
    const customers = BaseModel.find(where || {})
      .limit(limit * 1)
      .skip((page - 1) * limit);

    return customers;
  }
}

module.exports = new CustomerService();
