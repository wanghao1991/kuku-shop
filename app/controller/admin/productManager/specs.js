'use strict';

const { specSchema, commonIdSchema, specListSchema } = require('../../../../config/paramschema');
const BaseController = require('../base');

class SpecsController extends BaseController {
  constructor(ctx){
    super(ctx,'productManager','specs')
  }

  async index() {
    const { ctx } = this;
    let res = await super.index(ctx,specListSchema);
    console.log(33,res)
    
    ctx.success(ctx,res)
  }

  async add(){
    const { ctx } = this;
    let res = await super.add(specSchema);
    ctx.success(ctx,res);
  }

  async edit(){
    const { ctx } = this;
    let res = await super.edit([commonIdSchema,specSchema]);
    ctx.success(ctx,res);
  }
}

module.exports = SpecsController;
