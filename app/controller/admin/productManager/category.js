"use strict";

const { categorySchema, commonIdSchema, ParamValitator } = require("../../../../config/paramschema");
const BaseController = require("../base");

class CategoryController extends BaseController {
  constructor(ctx) {
    super(ctx, "productManager", "category");
  }
  async add(){
    const {ctx} = this
    let res = await super.add(categorySchema.add())
    ctx.success(ctx,res)
  }

  async edit(){
    const { ctx } = this
    let res = await super.edit(categorySchema.edit())
    ctx.success(ctx,res)
  }

  async getSpecByCategory(){
    const { ctx } =  this;
    new ParamValitator(commonIdSchema,ctx.request.query)
    let res = await ctx.service.admin.productManager.category.getSpecByCategory(ctx.request.query);
    ctx.success(ctx,res)
  }
}

module.exports = CategoryController;
