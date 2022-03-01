'use strict';

const { ParamValitator, spuSchema, commonIdSchema } = require('../../../../config/paramschema');
const BaseController = require('../base');

class SpuController extends BaseController {
    constructor(ctx){
        super(ctx,'productManager','spu')
    }
    //商品添加
    async productAdd(){
        const { ctx } = this;
        new ParamValitator(spuSchema,ctx.request.body);
        console.log(99999)
        let res = await ctx.service.admin.productManager.spu.productAdd(ctx.request.body)
        ctx.success(ctx,res);
    }
    //spu_detail信息
    async detailInfo(){
        const { ctx, app } = this; 
        new ParamValitator(commonIdSchema, ctx.request.query);
        let res = await app.model.SpuDetail.findOne({
            where:{
                pms_spu_id: ctx.request.query.id
            }
        });
        ctx.success(ctx, {data: res})
    }

}

module.exports = SpuController;
