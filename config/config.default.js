/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1602774283514_1951';

  config.session={
    key: 'SESSION_WANG_HAO', //密钥
    maxAge: 864000,
    httpOnly: true, //客户端只读
    encrypt: true,  //加密
    renew: true     //延长会话有效期
  }
  config.uploadPath = 'app/public/admin/upload'

  config.jwt={
    secret:'wh-wyy-ytt',
    expiresIn:30 // 30秒
  }

  config.security = {
    csrf:{
      enable:false
    }
  }
  config.sequelize = {
    dialect:"mysql",
    host:'shop-db',
    port:3306,
    user:'wanghao',
    password:'wanghao123321',
    database:'kkmall',
    timezone:'+08:00',
  }

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  }
  // add your middleware config here
  config.middleware = ['errorHandle'];

  config.adminAuth = {
   // ignore:"/admin/login"
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //----注意-------- paramschems.js里面维护了  key 值！！！！！！！！
 config.modelEnum = {
    '10':'Brand',
    '15':'CategoryBrand',
    '20':'Category',
    '25':'CommentReply',
    '30':'Comment',
    '35':'ProductType',
    '40':'Sku',
    '45':'SpecGroup',
    '50':'Spec',
    '55':'SpuDetail',
    '60':'SpuLadder',
    '65':'SpuReduction',
    '70':'Spu',
    "75":"Images"
  }
  //----注意-------- paramschems.js里面维护了  key 值！！！！！！！！

  return {
    ...config,
    ...userConfig,
  };
};
