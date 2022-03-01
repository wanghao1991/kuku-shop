'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const {INTEGER, DATE, STRING} = Sequelize;
    await queryInterface.createTable('brand',{
      id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      name:{
        type: STRING(30),
        comment:"商品品牌"
      },
      logo:{
        type:STRING(30),
        comment:"品牌logo"
      },
      letter:{
        type:STRING(10),
        comment:"品牌首字母",
      },
      enable:{
        type:INTEGER,
        comment:"是否有效-0无效  1有效",
        defaultValue:1
      },
      sort:{
        type:STRING(20),
        comment:"排序",
      },
      created_at:DATE,
      updated_at:DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
