module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const CommentReply = app.model.define(
    "pms_spu_comment_replay",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pms_comment_id: {
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
      content: STRING(1000),
      created_at: DATE,
      updated_at: DATE,
    },
    {
      freezeTableName: true,
    }
  );
  return CommentReply;
};
