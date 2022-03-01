'use strict';

const { brandSchema, commonIdSchema, ParamValitator } = require('../../../../config/paramschema');
const BaseController  = require('../base');
class BrandController extends BaseController {
  constructor(ctx){
      super(ctx,'productManager','brand')
  }

  async add(){
    const {ctx} = this
    let res = await super.add(brandSchema.add())
    ctx.success(ctx,res)
  }

  async edit(){
    const { ctx } = this
    let res = await super.edit(brandSchema.edit())
    ctx.success(ctx,res)
  }

  async getCategoryByBrand(){
    const { ctx } = this;
    new ParamValitator(commonIdSchema,ctx.request.query)
    let res = await ctx.service.admin.productManager.brand.getCategoryByBrand(ctx.request.query);
    ctx.success(ctx,res)
  }
}

module.exports = BrandController;
