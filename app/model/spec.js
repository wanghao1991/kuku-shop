const { HasSameName } = require("../../config/httpExpection");

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Spec = app.model.define(
    "pms_spec",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      spec_group_id: {
        type: INTEGER,
        comment: "属性分组id",
      },
      type_id: {
        type: INTEGER,
        comment: "分类id",
      },
      name: {
        type: STRING(30),
        comment: "参数名称",
      },
      unit: {
        type: STRING(30),
        comment: "单位名称",
      },
      select_type: {
        type: INTEGER,
        comment: "属性选择方式 0唯一  1单选  2多选",
      },
      input_type: {
        type: INTEGER,
        comment: "属性录入方式 0手动录入  1从列表中选择",
      },
      input_List: {
        type: STRING,
        comment: "可选值列表，逗号隔开",
        field: "input_List",
      },
      support_add: {
        type: INTEGER,
        defaultValue: 0,
        comment: "是否支持新增 0不支持  1支持",
      },
      pic_need:{
        type: INTEGER,
        defaultValue: 0,
        comment: "是否需要属性图片 0不需要  1需要",
      },
      generic: {
        type: INTEGER,
        comment: "是否是通用属性0 不是  1是",
        defaultValue: 1,
      },
      searching: {
        type: INTEGER,
        comment: "是否用于搜索 0 否  1是",
        defaultValue: 0,
      },
      segments: {
        type: STRING,
        comment: "用于区间过滤  0-100",
      },
      related_status: {
        type: INTEGER,
        comment: "相同属性产品是否关联  0不关联  1关联",
        defaultValue: 0,
      },
      created_at: DATE,
      updated_at: DATE,
    },
    {
      freezeTableName: true,
    }
  );
  Spec.associate = function () {
    Spec.belongsTo(app.model.ProductType, { foreignKey: "type_id", as: "t" });
    Spec.belongsTo(app.model.SpecGroup, { foreignKey: "spec_group_id" });
  };
  Spec.beforeCreate(async (instance, options) => {
    console.log(12334, instance, instance.name);
    let res = await app.model.Spec.findOne({
      where: {
        name: instance.name,
        type_id: instance.type_id,
      },
    });
    if (res) {
      throw new HasSameName(`数据库已经存在同类型同名称的数据！`);
    }
  });

  return Spec;
};
