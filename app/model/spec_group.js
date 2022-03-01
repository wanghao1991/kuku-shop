module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const SpecGroup = app.model.define(
    "pms_spec_group",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category_id: {
        type: INTEGER,
        comment: "分类id",
      },
      name: {
        type: STRING(30),
        comment: "参数组名称",
      },
      sort: {
        type: INTEGER,
        comment: "排序",
      },
      created_at: DATE,
      updated_at: DATE,
    },
    {
      freezeTableName: true,
    }
  );
  SpecGroup.associate = function(){
    SpecGroup.belongsTo(app.model.Category,{foreignKey:'category_id'})
    SpecGroup.hasMany(app.model.Spec,{foreignKey:'spec_group_id'})
  }
  return SpecGroup;
};
