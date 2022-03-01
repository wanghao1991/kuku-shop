'use strict';

const Service = require('egg').Service;
const BaseService = require('./base');
class ManagerService extends BaseService {
    constructor(ctx){
        super(ctx,'Manager')
    }
    /**
     * 管理员列表
     */
    async index() {
        const data = await super.index({
            attributes: ['id', 'status', 'name', 'created_at'],
            include:
            {
                attributes: ["id", "title", "desc"],
                model: this.ctx.model.Roles,
                through:{
                    attributes:[]
                }
            },
        })
        return { data };
    }
    /**
     * 新增管理员
     * @param {*} param0 
     */
    async add({ name, age, password, phone, sex, roleId }) {

        const { ctx } = this;
        let notHaveSameName = await this.findOne('name', name);
        if (!notHaveSameName) {
            return { code: 500, msg: '已经有同名管理员' }
        }
        let result = await ctx.model.Manager.create({
            name, age, password, phone, sex
        });
        await ctx.model.ManagerRole.destroy({
            where: {
                managerId: result.id
            }
        })
        let rolesIdArray = roleId.split(',');
        let addRoleManagerPromise = rolesIdArray.map(id => {
            return ctx.model.ManagerRole.create({
                roleId: id,
                managerId: result.id
            })
        })
        await Promise.all(addRoleManagerPromise);
        return { msg: "添加成功" };
    }


    /**
     * 编辑管理员
     */
    async edit({ id, name, age, password, phone, sex, roleId }) {
        const { ctx } = this;
        let notHaveSameName = await this.findOne('id', id);
        if (notHaveSameName) {
            return { code: 500, msg: '没有该管理员' }
        }
        await ctx.model.Manager.update({
            name, age, password, phone, sex
        }, {
            where: {
                id
            }
        });
        await ctx.model.ManagerRole.destroy({
            where: {
                managerId: id
            }
        })
        let rolesIdArray = roleId.split(',');
        let addRoleManagerPromise = rolesIdArray.map(roleId => {
            return ctx.model.ManagerRole.create({
                roleId: roleId,
                managerId: id
            })
        })
        await Promise.all(addRoleManagerPromise);
        return { msg: "修改成功" };
    }
    /**
   * 查询所有权限
   */
    async allAccess(id) {
        const { ctx } = this;
        let result = await ctx.model.Manager.findOne({
            where: {
                id
            },
            through: { attributes: [] },
            include: {
                model: ctx.model.Roles,
                include: {
                    model: ctx.model.Access,
                    through: { attributes: [] },
                }
            }
        })
       // console.log(2323,result)
        if (result && result.roles) {
            let roleArray = result.roles;
            let accessArray = [];
            let idStory = [];
            roleArray.forEach(role => {
                role.accesses.forEach(access => {
                    if (!idStory.includes(access.id)) {
                        accessArray.push(access)
                        idStory.push(access.id)
                    }
                })

            });
            accessArray.sort((ob1,ob2)=>{
                if(ob1.type < ob2.type)return 1;  
                if(ob1.type > ob2.type)return -1;  
                else 0  
            })
            let leveleArray = [];
            accessArray.forEach(item=>{
                if(item.parent_id != 0){
                    let index = this.findIndexById(item.parent_id,accessArray);
                    accessArray[index].setDataValue('children',[item])
                }
            })
            accessArray = accessArray.filter(item=>item.type === 0);
            
            return { data: accessArray }
        }
    }
    findIndexById(id,array = []){
        let index = -1;
        for(const [key,value]  of array.entries()){
            if(value.id === id){
                index = key;
                break;
            }
        };
        return index;
    }
}

module.exports = ManagerService;
