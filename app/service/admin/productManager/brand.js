"use strict";

const BaseService = require("../base");

class BrandService extends BaseService {
  constructor(ctx) {
    super(ctx, "Brand");
  }

  async index() {
    const { app } = this;
    let data = super.index({
      include: {
        model: app.model.Category,
        as: "category",
        attributes: ["id", "name", "isParent"],
        through: {
          attributes: [],
        },
      },
    });
    return data;
  }

  async detail(id) {
    const { app } = this;
    let data = await this.model.findOne({
      where: { id },
      include: {
        model: app.model.Category,
        as: "category",
        attributes: ["id"],
      },
    });
    return { data };
  }

  async add(info) {
    let { category_id } = info;
    delete info.category_id;
    let cids = category_id.split(",") || [];

    try {
      await this.ctx.model.transaction(async (t) => {
        let res = await this.app.model.Brand.create(info, { transaction: t });
        let bId = res.id;

        const PmsCategoryBrandAllPromise = cids.map((cid) => {
          return this.app.model.CategoryBrand.create(
            {
              category_id: cid,
              brand_id: bId,
            },
            { transaction: t }
          );
        });

        await Promise.all(PmsCategoryBrandAllPromise);
      });
    } catch (error) {
      throw error;
    }

    return { msg: "添加成功" };
  }

  async edit(info) {
    let { category_id } = info;
    delete info.category_id;
    let cids = category_id.split(",") || [];

    try {
      await this.ctx.model.transaction(async (t) => {
        let res = await this.app.model.Brand.update(
          info,
          {
            where: {
              id: info.id,
            },
          },
          { transaction: t }
        );
        const PmsCategoryBrandAllDelPromise = cids.map((cid) => {
          return this.app.model.CategoryBrand.destroy(
            {
              where: {
                brand_id: info.id,
              },
            },
            { transaction: t }
          );
        });
        await Promise.all(PmsCategoryBrandAllDelPromise);

        const PmsCategoryBrandAllPromise = cids.map((cid) => {
          return this.app.model.CategoryBrand.create(
            {
              category_id: cid,
              brand_id: info.id,
            },
            { transaction: t }
          );
        });
        await Promise.all(PmsCategoryBrandAllPromise);
      });
    } catch (error) {
      throw error;
    }

    return { msg: "编辑成功" };
  }

  async getCategoryByBrand({ id }) {
    const { ctx } = this;
    let data = await ctx.model.Brand.findAll({
      where: {
        id,
      },
      include: {
        model: ctx.model.Category,
        through: {
          attributes: [],
        },
      },
    });
    return { data };
  }
}

module.exports = BrandService;
