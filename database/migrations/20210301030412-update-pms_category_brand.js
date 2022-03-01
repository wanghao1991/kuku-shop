"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.changeColumn("pms_category_brand", "category_id", {
      type: INTEGER,
      comment: "分类id",
      references: {
        model: "Category",
        key: "id",
      },
    });
    await queryInterface.changeColumn("pms_category_brand", "brand_id", {
      type: INTEGER,
      comment: "品牌id",
      references: {
        model: "Brand",
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
