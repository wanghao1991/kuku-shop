'use strict';

const BaseController = require('./base')

class ManagerController extends BaseController {
  constructor(ctx){
    super(ctx,'manager')
  }
 
  /**
   * 管理员新增
   */
  async add() {
    const {ctx} = this;
    const res = await super.add({
      name: "string",
      password: "password",
      sex: "int",
      age: "int",
      roleId: "string"
    })
    ctx.success(ctx, res)
  }

  /**
   * 管理员编辑
   */
  async edit() { //改

    const { ctx } = this;
    const res = await super.edit({
      id:"int",
      name: "string",
      password: "password",
      sex: "int",
      age: "int",
      roleId: "string"
    })
    ctx.success(ctx, res)
  }

  /**
   * 当前用户所有权限
   */
  async allAccess(){
    const {ctx,service} = this;
    const {id} = ctx.request.query;
    const res = await service.admin.manager.allAccess(id)
    ctx.success(ctx, res)
  }

}

module.exports = ManagerController;
