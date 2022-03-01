"use strict";

const BaseService = require("../base");

class TypeService extends BaseService {
  constructor(ctx) {
    super(ctx, "ProductType");
  }
}

module.exports = TypeService;
