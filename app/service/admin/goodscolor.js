'use strict';

const BaseService = require('./base');

class GoodscolorService extends BaseService {
  constructor(ctx){
      super(ctx,'GoodsColor')
  }
  async index(){
      const {ctx} = this;
      const data = await super.index({

      })
      return data
  }
}

module.exports = GoodscolorService;
