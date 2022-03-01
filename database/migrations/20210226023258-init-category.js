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
    await queryInterface.createTable('category',{
      id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      parent_id:{
        type: INTEGER,
        comment:"父类id"
      },
      isParent:{
        type: INTEGER,
        comment:'是否时父类 0否 1是',
        defaultValue:0
      },
      name:{
        type: STRING(30),
        comment:"分类名称"
      },
      image:{
        type:STRING(30),
        comment:"缩略图"
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
