'use strict';

const Service = require('egg').Service;
const BaseService  = require('./base');

class GoodstypeService extends BaseService {
    constructor(ctx){
        super(ctx,'Goodstype')
    }
    /**
     * 商品类型列表
     */
    async index() {
        const result = await super.index({
            attributes: ['id', 'description','status', 'title', 'created_at']
        })
        return { data: result };
    }


    
}

module.exports = GoodstypeService;
