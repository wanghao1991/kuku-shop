'use strict';

const Service = require('egg').Service;
const BaseService  = require('./base');
class RoleService extends BaseService {
    constructor(ctx){
        super(ctx,'Roles')
    }
    /**
     * 角色列表
     */
    async index() {

        let data = await super.index({
            paging:false,
            attributes: ['id', 'title', 'desc', 'status', 'created_at'],
        })
        return {data}
    }
    



    /**
     * 角色添加权限
     */
    async roleLineAccess(info) {
        const { ctx } = this;
        const { roleId, accessIds } = info;
        await ctx.model.AccessRole.destroy({
            where:{
                roleId
            }
        });
        let accessIdArray = accessIds.split(',');
        let promiseArray = accessIdArray.map(id => {
            return ctx.model.AccessRole.create({
                roleId: roleId,
                accessId: id
            })
        })
        let result = await Promise.all(promiseArray);
        return {msg:'添加成功'}
    }
}

module.exports = RoleService;
