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
    await queryInterface.createTable('pms_spu_reduction',{
      id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      pms_spu_id:{
        type:INTEGER
      },
      full_price:{
        type:DECIMAL(10,2),
        comment:"商品满足金额"
      },
      reduce_price:{
        type:DECIMAL(10,2),
        comment:"商品减少金额"
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
