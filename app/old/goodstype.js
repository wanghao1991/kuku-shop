'use strict';

const Controller = require('egg').Controller;
const BaseController = require('./base')

class GoodstypeController extends BaseController {
    constructor(ctx){
        super(ctx,'goodstype')
    }

    /**
     * 商品类型新增
     */
    async add() {
        const { ctx } = this;
        const res = await super.add({
            title: "string",
        },'title')
        ctx.success(ctx, res)
    }

    /**
     * 商品类型编辑
     */
    async edit() { //改

        const { ctx } = this;
        const res = await super.edit({
            id:"int",
            title: "string",
        })
        ctx.success(ctx, res)
    }
}

module.exports = GoodstypeController;
