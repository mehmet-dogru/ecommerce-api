const BaseService = require("./base.service");
const BaseModel = require("../models/Address");

class AddressService extends BaseService {
  constructor() {
    super(BaseModel);
  }

  list(page, limit, where) {
    const addresses = BaseModel.find(where || {})
      .limit(limit * 1)
      .skip((page - 1) * limit);

    return addresses;
  }
}

module.exports = new AddressService();
