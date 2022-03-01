
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
    await queryInterface.createTable('pms_category_brand',{
      id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      category_id: {
        type: INTEGER,
        comment: "分类id",
        references:{
            model:"category",
            key:'id'
        }
      },
      brand_id: {
        type: INTEGER,
        comment: "品牌id",
        references:{
            model:"brand",
            key:'id'
        }
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
