"use strict";
const {typeSchema, commonIdSchema} = require('../../../../config/paramschema')
const BaseController = require("../base");

class TypeController extends BaseController {
  constructor(ctx) {
    super(ctx, "productManager", "type");
  }
  async add(){
    const {ctx} = this
    let res = await super.add(typeSchema)
    ctx.success(ctx,res)
  }

  async edit(){
    const { ctx } = this
    let res = await super.edit([commonIdSchema, typeSchema])
    ctx.success(ctx,res)
  }
}

module.exports = TypeController;
