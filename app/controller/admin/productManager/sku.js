"use strict";

const {
  ParamValitator,
  commonIdSchema,
} = require("../../../../config/paramschema");
const BaseController = require("../base");

class SkuController extends BaseController {
  constructor(ctx) {
    super(ctx, "productManager", "sku");
  }
  async edit() {
    const { ctx } = this;
    let res = await super.edit(commonIdSchema);
    ctx.success(ctx, res);
  }
  async findSkuById() {
    const { ctx, app } = this;
    new ParamValitator(commonIdSchema, ctx.request.query);
    let res = await app.model.Sku.findAll({
      where: {
        pms_spu_id: ctx.request.query.id,
      },
    });
    ctx.success(ctx, { data: res });
  }
}

module.exports = SkuController;
