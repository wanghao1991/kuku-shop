"use strict";

const { specGroupSchema } = require("../../../../config/paramschema");
const BaseController = require("../base");

class SpecGroupController extends BaseController {
  constructor(ctx) {
    super(ctx, "productManager", "specGroup");
  }
  async add() {
      const { ctx } = this;
      let res = await super.add(specGroupSchema.add());
      ctx.success(ctx,res);
  }
  async edit() {
    const { ctx } = this;
    let res = await super.edit(specGroupSchema.edit());
    ctx.success(ctx,res);
}
}

module.exports = SpecGroupController;
