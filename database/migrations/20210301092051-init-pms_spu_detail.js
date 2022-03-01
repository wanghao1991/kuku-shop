'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const {INTEGER, DATE, STRING, JSON, TEXT} = Sequelize;
    await queryInterface.createTable('pms_spu_detail',{
      id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      pms_spu_id:{
        type:INTEGER
      },
      generic_spec:{
        type:JSON,
        comment:"通用规格参数信息"
      },
      special_spec:{
        type:JSON,
        comment:"特有规格参数信息"
      },
      description:{
        type:TEXT,
        comment:"商品信息描述"
      },
      desc_desk:{
        type:TEXT,
        comment:"包装清单"
      },
      desc_service:{
        type:TEXT,
        comment:"售后服务"
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
