"use strict";

const { sequelize } = require("../../../../config/plugin");
const BaseService = require("../base");

class SpuService extends BaseService {
  constructor(ctx) {
    super(ctx, "Spu");
  }
  async productAdd(parsms) {
    const {
        spu,detail,item
    } = parsms;
    detail.generic_spec = JSON.stringify(detail.generic_spec || {})
    detail.special_spec = JSON.stringify(detail.special_spec || {})
    item.forEach(sku=>{
      sku.own_spec = JSON.stringify(sku.own_spec || {})
    })
    try {
        await this.ctx.model.transaction(async t=>{
            let spuRes = await this.app.model.Spu.create({
                ...spu
            },{transaction:t});

            const spuId = spuRes&&spuRes.id;
            
            await this.app.model.SpuDetail.create({
                ...detail,'pms_spu_id':spuId
            },{transaction:t})

            const skuAllPromise = item.map(sku=>{
              return this.app.model.Sku.create({
                  ...sku,'pms_spu_id':spuId
              },{transaction:t})
            })

            await Promise.all(skuAllPromise)
    
        })
        return { msg: "添加成功" };
    } catch (error) {
        throw error
    }

  }
}

module.exports = SpuService;
