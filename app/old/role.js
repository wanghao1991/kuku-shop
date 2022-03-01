'use strict';

const BaseController = require('./base')
class RoleController extends BaseController {
    constructor(ctx){
        super(ctx,'role')
    }
   
    /**
     * 角色增加
     */
    async add() { 
        const {ctx} = this;
        let res = await super.add({
            title:"string"
        },'title')
        ctx.success(ctx,res)
    }
    /**
     * 角色修改
     */
    async edit() { //改
        const {ctx} = this;
        let res = await super.edit({
            id:"int",
            title:"string"
        })
        ctx.success(ctx,res)
    }
    /**
     * 角色添加权限
     * 
     */
    async  roleLineAccess(){
        const {ctx,service} = this;
        ctx.validate({
            roleId:'int',
            accessIds:'string'
        })
        let res = await service.admin.role.roleLineAccess(ctx.request.body)
        ctx.success(ctx,res)
    }
}

module.exports = RoleController;
