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
    await queryInterface.createTable('pms_spec',{
      id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      spec_group_id:{
        type: INTEGER,
        comment:"属性分组id",
      },
      category_id:{
        type: INTEGER,
        comment:"分类id",
      },
      name:{
        type: STRING(30),
        comment:"参数名称"
      },
      unit:{
        type:STRING(30),
        comment:"单位名称",
      },
      select_type:{
        type:INTEGER,
        comment:"属性选择方式 0唯一  1单选  2多选"
      },
      input_type:{
        type:INTEGER,
        comment:"属性录入方式 0手动录入  1从列表中选择"
      },
      input_List:{
        type:STRING,
        comment:"可选值列表，逗号隔开"
      },
      generic:{
        type:INTEGER,
        comment:"是否是通用属性0 不是  1是",
        defaultValue:1
      },
      searching:{
        type:INTEGER,
        comment:"是否用于搜索 0 否  1是",
        defaultValue:0
      },
      segments:{
        type: STRING,
        comment:"用于区间过滤  0-100"
      },
      related_status:{
        type: INTEGER,
        comment:"相同属性产品是否关联  0不关联  1关联",
        defaultValue:0
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
