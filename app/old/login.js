'use strict';
const BaseController = require('./base')

class LoginController extends BaseController {
  async login() {
    const { ctx } = this;
    const { userName, password, verifiCode, roleId } = ctx.request.body;
    ctx.validate({
      userName: 'string',
      password: 'password',
      roleId:"string"
    });

    if (verifiCode === ctx.session.verifiCode) {
      let result = await ctx.service.admin.login.login({ userName, password, roleId });
      ctx.body = result;
    } else {
      ctx.error(ctx, 400, '验证码错误')
    }

  }
  async dologin() {
    const { ctx } = this;
    const { userName, password, verifiCode } = ctx.request.body;
    ctx.validate({
      userName: 'string',
      password: 'password'
    })

    if (verifiCode === ctx.session.verifiCode) {

      let result = await ctx.service.admin.login.dologin({ userName, password });
      ctx.body = result;
    } else {
      ctx.error(ctx, 400, '验证码错误')
    }

  }
  async addRole(){
    const { ctx } = this;
    let res = await ctx.model.Roles.findAll();
    console.log(44,res)
  }
}

module.exports = LoginController;
