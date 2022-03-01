"use strict";
const BaseService = require("../base");

class SpecsService extends BaseService {
  constructor(ctx) {
    super(ctx, "Spec");
  }

  async index({typeId, generic = 3}) {
    let data = await super.index({
      where:{
        type_id:typeId,
        generic:generic === 3?[0,1]:generic
      },
      attributes: [
        "id",
        "input_List",
        "name",
        "input_type",
        "select_type",
        "type_id",   
        "support_add",
        "pic_need",
        "generic",
        [this.app.Sequelize.col('t.name'),'type_name']
      ],
      include: {
        attributes: [],
        model: this.app.model.ProductType,     
        as:'t'
      },
      raw: true
    });
    console.log(12345,data)

    return data;
  }
}

module.exports = SpecsService;
