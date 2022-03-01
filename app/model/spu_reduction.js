module.exports = (app) => {
  const { STRING, INTEGER, DATE, DECIMAL } = app.Sequelize;
  const SpuReduction = app.model.define(
    "pms_spu_reduction",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pms_spu_id: {
        type: INTEGER,
      },
      full_price: {
        type: DECIMAL(10, 2),
        comment: "商品满足金额",
      },
      reduce_price: {
        type: DECIMAL(10, 2),
        comment: "商品减少金额",
      },
      created_at: DATE,
      updated_at: DATE,
    },
    {
      freezeTableName: true,
    }
  );
  return SpuReduction;
};
