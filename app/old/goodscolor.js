'use strict';

const BaseController = require('./base');

class GoodscolorController extends BaseController {
  constructor(ctx){
      super(ctx,'goodscolor')
  }
  async add(){
      const {ctx} = this;
      const res = await super.add({
        color_name:'string'
      },'color_name')
      ctx.success(ctx,res)
  }
}

module.exports = GoodscolorController;
