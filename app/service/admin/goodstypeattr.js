'use strict';

const Service = require('egg').Service;
const BaseService  = require('./base');
class GoodstypeattrService extends BaseService {
    constructor(ctx){
        super(ctx,'Goodstypeattr')
    }

    /**
     * 更具id获取类型属性
     */
    async getAttrById(id){
        const {ctx} = this;
        let data = await ctx.model.Goodstypeattr.findAll({
            include:{
                model:ctx.model.Goodstype,
                where:{
                    id
                },
                attributes:[]
            }
        })
        return {data}
    }


}

module.exports = GoodstypeattrService;
