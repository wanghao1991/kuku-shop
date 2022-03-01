module.exports = (app) => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const PmsProductType = app.model.define(
      "pms_product_type",
      {
        id: {
          type: INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: STRING(20),
          comment: "类型名称",
        },
        desc: {
          type: STRING(30)
        },
        created_at: DATE,
        updated_at: DATE,
      },
      {
        freezeTableName: true,
      }
    );
    PmsProductType.associate = function() {
      PmsProductType.hasMany(app.model.Spec,{foreignKey:'type_id',targetKey:'id'})
    }
    
    return PmsProductType;
  };
  