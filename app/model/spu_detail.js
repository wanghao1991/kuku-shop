module.exports = (app) => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;
  const SpuDetail = app.model.define(
    "pms_spu_detail",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pms_spu_id: {
        type: INTEGER,
      },
      generic_spec: {
        type: JSON,
        comment: "通用规格参数信息",
      },
      special_spec: {
        type: JSON,
        comment: "特有规格参数信息",
      },
      description: {
        type: TEXT,
        comment: "商品信息描述",
      },
      desc_desk: {
        type: TEXT,
        comment: "包装清单",
      },
      desc_service: {
        type: TEXT,
        comment: "售后服务",
      },
      created_at: DATE,
      updated_at: DATE,
    },
    {
      freezeTableName: true,
    }
  );
  return SpuDetail;
};
