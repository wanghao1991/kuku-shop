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
    await queryInterface.createTable('pms_spec_group',{
      id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      category_id:{
        type: INTEGER,
        comment:"分类id",
      },
      name:{
        type: STRING(30),
        comment:"参数组名称"
      },
      sort:{
        type: INTEGER,
        comment:"排序"
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
