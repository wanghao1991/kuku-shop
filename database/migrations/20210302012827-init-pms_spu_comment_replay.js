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
    await queryInterface.createTable('pms_spu_comment_replay',{
      id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      pms_comment_id:{
        type:INTEGER
      },
      nick_name:{
        type:STRING(20),
        comment:"昵称"
      },
      avator:{
        type:STRING(500),
        comment:"头像"
      },
      content:STRING(1000),
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
