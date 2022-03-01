'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const {INTEGER, DATE, STRING, JSON, TEXT, DECIMAL} = Sequelize;
    await queryInterface.createTable('pms_sku',{
      id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      pms_spu_id:{
        type:INTEGER
      },
      sku_sn:{
        type:STRING(30)
      },
      title:{
        type:STRING(150),
        comment:"商品标题"
      },
      name:{
        type:STRING(100),
        comment:"商品名称"
      },
      images:{
        type:STRING(1000),
        comment:"商品图片"
      },
      price:{
        type:DECIMAL(10,2),
        comment:"单品原价"
      },
      promotion_price:{
        type:DECIMAL(10,2),
        comment:"单品促销价"
      },
      sales:{
        type:INTEGER,
        comment:"销量"
      },
      enable:{
        type:INTEGER,
        comment:"是否有效 0无效 1有效",
        defaultValue: 1
      },
      indexs:{
        type:STRING(50),
        comment:"特有规格在spu_detail对应下标组合 0_1_1"
      },
      own_spec:{
        type:JSON,
        comment:"sku特有规格参数键值对"
      },
      stock:{
        type:INTEGER,
        comment:"库存"
      },
      lock_stock:{
        type:INTEGER,
        comment:"锁定库存"
      },
      delete_status:{
        type:INTEGER,
        comment:"软删除  0为删除  1已删除"
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
