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
    await queryInterface.changeColumn('pms_sku','name',{
      type:STRING(30),
      comment:"商品名称",
      unique:true,
    })
    await queryInterface.changeColumn('pms_sku','sku_sn',{
      type:STRING(30),
      comment:"商品编号",
      unique:true,
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
