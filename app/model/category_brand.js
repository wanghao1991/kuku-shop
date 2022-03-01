module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const PmsCategoryBrand = app.model.define(
    "pms_category_brand",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category_id: {
        type: INTEGER,
        comment: "分类id",
        references:{
            model:app.model.Category,
            key:'id'
        }
      },
      brand_id: {
        type: INTEGER,
        comment: "品牌id",
        references:{
            model:app.model.Brand,
            key:'id'
        }
      },
      created_at: DATE,
      updated_at: DATE,
    },
    {
      freezeTableName: true,
    }
  );
  PmsCategoryBrand.associate = function(){
    app.model.Category.belongsToMany(app.model.Brand,{through:PmsCategoryBrand})
    app.model.Brand.belongsToMany(app.model.Category,{through:PmsCategoryBrand,as:'category'})
  }
  return PmsCategoryBrand;
};
