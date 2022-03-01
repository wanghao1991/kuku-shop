'use strict';
const Service = require('egg').Service;
const BaseService  = require('./base');
class AccessService extends BaseService {
    constructor(ctx){
        super(ctx,'Access')
    }
    /**
     * 权限列表
     */
    async index() {
        let data = await super.index({
            attributes:['id', 'module_name', 'action_name', 'type', 'sort', 'description', 'status'],
            where:{
                type: 0
            },
            sort:['sort'],
            include: {
                attributes: ['id', 'module_name', 'action_name', 'type', 'sort', 'description', 'status'],
                model: this.ctx.model.Access,
                
                include: {
                    attributes: ['id', 'module_name', 'action_name', 'type', 'sort', 'description', 'status'],
                    model: this.ctx.model.Access,
                },
                required:false,
            }
        })
        return {data}
    }
    /**
     * 添加权限
     * @param {*} info 
     */
    async add(info) {
        const { ctx } = this;
        //顶级模块
        if (info.type === 0) {
            let notHaveSameName = await this.findOne('module_name', info.module_name);
            if (!notHaveSameName) {
                return { code: 500, msg: '已经存在该模块' }
            }
        }
        //菜单模块
        if (info.type === 1) {
            let res = await ctx.model.Access.findOne({
                where: {
                    type: 0,
                    id: info.parent_id
                },
                include: {
                    model: this.ctx.model.Access,
                    where: {
                        'action_name': info.action_name
                    }
                }
            });
            let resJson = res && res.toJSON() || {};
            console.log(2323,resJson)
            if (Array.isArray(resJson.accesses) && resJson.accesses.length > 0) {
                return { code: 500, msg: '已经存在该菜单' }
            }
        }
        let res = await ctx.model.Access.create(info)
        return { msg: "添加成功！" }
    }
    /**
    * 删除权限
    */
    async delete(id) {
        const { ctx } = this;
        let flag = await this.findOne('id', id);
        if (flag) {
            return {
                code: 500,
                msg: "无法删除，该角色不存在"
            }
        }
        let res = await ctx.model.Access.findOne({
            where: {
                id
            },
            include: {
                model: this.ctx.model.Access,
            }
        });
        let resJson = res && res.toJSON() || {};
        if (Array.isArray(resJson.accesses) && resJson.accesses.length > 0) {
            return { code: 500, msg: '该权限下，存在子权限！' }
        }
        await ctx.model.Access.destroy({
            where: {
                id
            }
        });
        return { msg: "删除成功" };
    }
}

module.exports = AccessService;
