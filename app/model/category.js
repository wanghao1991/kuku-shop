const { ForbiddenDel } = require("../../config/httpExpection");

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Category = app.model.define(
    "category",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      parent_id: {
        type: INTEGER,
        comment: "父类id",
      },
      isParent: {
        type: INTEGER,
        comment: "是否时父类 0否 1是",
        defaultValue: 0,
        field:"isParent"
      },
      name: {
        type: STRING(30),
        comment: "分类名称",
      },
      image: {
        type: STRING(30),
        comment: "缩略图",
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
    },
    {
      freezeTableName: true,
      underscored:true
    }
  );
  Category.associate = function() {
    Category.hasMany(app.model.SpecGroup)
    Category.hasMany(app.model.Category,{foreignKey:'parent_id',as:"children"})
   // Category.hasMany(app.model.Spec)
  }
  Category.beforeBulkDestroy(async (instance,options)=>{
      let relateTableData = await app.model.models.pms_category_brand.findAll({
        where:{
          'category_id':instance.where.id
        }
      });
      let isParent = await app.model.models.category.findOne({
        where:{
          'parent_id':instance.where.id
        }
      });
      if(isParent){
        throw new ForbiddenDel('禁止删除！该分类下存在子分类！')
      }
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
  return Category;
};
