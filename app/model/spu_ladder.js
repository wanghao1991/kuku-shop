module.exports = (app) => {
  const { STRING, INTEGER, DATE, DECIMAL } = app.Sequelize;
  const SpuLadder = app.model.define(
    "pms_spu_ladder",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pms_spu_id: {
        type: INTEGER,
      },
      count: {
        type: INTEGER,
        comment: "满足的商品数量",
      },
      discount: {
        type: DECIMAL(10, 2),
        comment: "折扣",
      },
      price: {
        type: DECIMAL(10, 2),
        comment: "折后价格",
      },
      created_at: DATE,
      updated_at: DATE,
    },
    {
      freezeTableName: true,
    }
  );
  return SpuLadder;
};
