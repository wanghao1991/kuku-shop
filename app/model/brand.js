module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Brand = app.model.define("brand", {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING(30),
      comment: "商品品牌",
      unique:true
    },
    logo: {
      type: STRING(30),
      comment: "品牌logo",
    },
    letter: {
      type: STRING(10),
      comment: "品牌首字母",
    },
    enable: {
      type: INTEGER,
      comment: "是否有效-0无效  1有效",
      defaultValue: 1,
    },
    sort: {
      type: STRING(20),
      comment: "排序",
    },
    created_at: DATE,
    updated_at: DATE,
  },{
    freezeTableName: true
  });
  Brand.beforeBulkDestroy(async (instance,options)=>{
    console.log(334,instance)
      let relateTableData = await app.model.models.pms_category_brand.findAll({
        where:{
          'brand_id':instance.where.id
        }
      });
      if(Array.isArray(relateTableData) && relateTableData.length > 0){
        let promiseAll = relateTableData.map(item=>{
          return app.model.models.pms_category_brand.destroy({
            where:{
              'id':item.id
            }
          })
        });
        await Promise.all(promiseAll)
      }
  })
  return Brand;
};
