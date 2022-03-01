'use strict';

const Controller = require('egg').Controller;
const BaseController = require('./base')
class GoodstypeattrController extends BaseController {
    constructor(ctx){
        super(ctx,'goodstypeattr')
    }

    /**
     * 根据商品类型id获取类型属性
     */
    async getAttrById(){
        const {ctx,service} = this;
        const {id} = ctx.request.query
        let res = await service.admin.goodstypeattr.getAttrById(id)
        ctx.success(ctx, res)
    }
    /**
     * 商品类型属性新增
     */
    async add() {
        const { ctx } = this;

        const res = await super.add({
            title: "string",
            goodstype_id:"int",
            attr_type:'int'
        },'title')
        ctx.success(ctx, res)
    }

    /**
     * 商品类型属性编辑
     */
    async edit() { //改

        const { ctx } = this;

        const res = await super.edit({
            id:"int",
            title: "string",
            goodstype_id:"int",
            attr_type:'int'
        })
        ctx.success(ctx, res)
    }
}

module.exports = GoodstypeattrController;
