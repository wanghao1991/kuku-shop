module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const Images = app.model.define(
    "images",
    {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      path: STRING(300),
      type: {
        type: INTEGER,
      },
      created_at: DATE,
      updated_at: DATE,
    },
    {
      freezeTableName: true,
    }
  );
  return Images;
};
