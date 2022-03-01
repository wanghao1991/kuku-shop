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
    await queryInterface.createTable('pms_spu_ladder',{
      id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      pms_spu_id:{
        type:INTEGER
      },
      count:{
        type:INTEGER,
        comment:"满足的商品数量"
      },
      discount:{
        type:DECIMAL(10,2),
        comment:"折扣"
      },
      price:{
        type:DECIMAL(10,2),
        comment:"折后价格"
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
