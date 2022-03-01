"use strict";

const BaseService = require("../base");

class CategoryService extends BaseService {
  constructor(ctx) {
    super(ctx, "Category");
  }

  async index() {
    const data = await super.index({
      where: {
        parent_id: 0,
      },
      include: {
        model: this.ctx.model.Category,
        as:'children',
        attribute:['id','name','sort','enable',['categories','children']],
        include: {
          model: this.ctx.model.Category,
          as:'children',
          attribute:['id','name','sort','enable',['categories','children']],
        },
        required:false
      },
    });
    return data;
  }

  async getSpecByCategory({ id }) {
    const { ctx } = this;
    let data = await ctx.model.Category.findOne({
      where: {
        id: 1,
      },
      include: {
        model: ctx.model.SpecGroup,
        include: {
          model: ctx.model.Spec,
        },
      },
    });
    return { data };
  }
}

module.exports = CategoryService;
