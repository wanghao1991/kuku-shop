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
    await queryInterface.createTable('pms_spu',{
      id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      spu_sn:{
        type:STRING(30),
        comment:"商品编号"
      },
      name:{
        type:STRING(30),
        comment:"商品名称"
      },
      sub_title:{
        type:STRING(50),
        comment:"商品副标题"
      },
      category_id:{
        type:INTEGER,
        comment:"分类id"
      },
      brand_id:{
        type:INTEGER,
        comment:"品牌id"
      },
      is_new:{
        type:INTEGER,
        comment:"是否新品 0不是 1是",
        defaultValue:1
      },
      is_publish:{
        type:INTEGER,
        comment:"是否推荐 0否  1是",
        defaultValue:0
      },
      verify_status:{
        type:INTEGER,
        comment:"审核状态 0未审核  1已审核",
        defaultValue:0
      },
      saleable:{
        type:INTEGER,
        comment:"是否上架  0否  1是",
        defaultValue:1
      },
      img:{
        type:STRING(1000),
        comment:"图片"
      },
      promotion_type:{
        type:INTEGER,
        comment:"促销类型 0没有促销，原价   1使用促销价  2使用会员价  3使用阶梯价  4使用满减价  5限时购（秒杀）"
      },
      promotion_limit:{
        type:INTEGER,
        comment:"活动限购数量"
      },
      price:{
        type:DECIMAL(10,2),
        comment:"价格"
      },
      original_price:{
        type:DECIMAL(10,2),
        comment:"市场价"
      },
      gift_point:{
        type:INTEGER,
        comment:'赠送积分'
      },
      promotion_price:{
        type: DECIMAL(10,2),
        comment:"促销价格"
      },
      promotion_start_time:{
        type:DATE,
        comment:"促销开始时间"
      },
      promotion_end_time:{
        type:DATE,
        comment:"促销结束时间"
      },
      sort:{
        type:STRING(20),
        comment:"排序",
      },
      stock:{
        type:INTEGER,
        comment:"库存"
      },
      delete_status:{
        type:INTEGER,
        comment:"软删除  0为删除  1已删除"
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
