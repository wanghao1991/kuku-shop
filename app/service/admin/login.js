'use strict';

'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async login({ userName, password,roleId }) {
    const { ctx } = this;
    let res = await ctx.model.Users.findAll({
      where: {
        name: userName,
      },
      raw: true
    });

    if (res && res.length > 0) {

      return { code: 500, msg: '该用户已经注册' }
    } else {
      let md5Password = ctx.md5(password);
      let res = await ctx.model.Users.create({
        name: userName,
        password: md5Password,
      });

      await this.ctx.model.RoleUser.destroy({
        where: {
          userId: res.id
        }
      })
      let rolesIdArray = roleId.split(',');
      let addRoleUserPromise = rolesIdArray.map(role => {
        return this.ctx.model.RoleUser.create({
          roleId: role,
          userId: res.id
        })
      })
      let res2 = await Promise.all(addRoleUserPromise);
      return res;


      return { code: 200, msg: '创建ok' };
    }
  }
  async dologin({ userName, password }) {
    const { ctx } = this;
    let md5Password = ctx.md5(password);
    let data = await ctx.model.Users.findAll({
      where: {
        name: userName,
      },
      raw: true
    });
    if (data && data.length > 0) {

      if (data[0].password === md5Password) {

        ctx.success(ctx, 200, '找到了')
        return { code: 200, msg: "找到了" }
      } else {
        return { code: 500, msg: "密码错误" }
      }
    } else {
      return { code: 500, msg: "未查询到用户" }
    }
  }
}

module.exports = LoginService;
