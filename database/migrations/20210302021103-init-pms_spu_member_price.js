'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const {INTEGER, DATE, STRING , DECIMAL} = Sequelize;
    await queryInterface.createTable('pms_spu_member_price',{
      id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      pms_spu_id:{
        type:INTEGER
      },
      member_level_id:{
        type:INTEGER,
        comment:"会员等级ID"
      },
      member_level_name:{
        type:STRING(30),
        comment:"会员等级名称"
      },
      member_price:{
        type:DECIMAL(10,2),
        comment:"会员价格"
      },
      created_at:DATE,
      updated_at:DATE,
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
