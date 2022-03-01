module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Comment = app.model.define(
    "pms_spu_comment",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pms_spu_id: {
        type: INTEGER,
      },
      nick_name: {
        type: STRING(20),
        comment: "昵称",
      },
      avator: {
        type: STRING(500),
        comment: "头像",
      },
      star: {
        type: INTEGER,
        comment: "评论星数量",
      },
      is_show: {
        type: INTEGER,
        comment: "是否展示  0不展示  1展示",
        defaultValue: 1,
      },
      pms_spu_name: {
        type: STRING(50),
        comment: "购买商品名称",
      },
      pms_spu_spec: {
        type: JSON,
        comment: "购买商品规格",
      },
      content: {
        type: STRING(1000),
        comment: "评论内容",
      },
      images: {
        type: STRING(1000),
        comment: "评论图片",
      },
      replay_count: {
        type: INTEGER,
        comment: "回复数量",
      },
      created_at: DATE,
      updated_at: DATE,
    },
    {
      freezeTableName: true,
    }
  );
  return Comment;
};
