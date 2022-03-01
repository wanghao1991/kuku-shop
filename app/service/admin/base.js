'use strict';

const Service = require('egg').Service;

class BaseService extends Service {
    /**
     * 
     * @param {*} ctx 
     * @param {* 对应 model 名称} modelName 
     */
    constructor(ctx, modelName) {
        super(ctx)
        this.model = this.app.model[modelName];
    }
    /**
     * 
     * @param {*} paging 
     * @param {*} attributes 
     * @param {*} where 
     * @param {*} order 
     * @param {*} include 
     */
    async index({ paging = true, attributes, where, order, include,raw }={paging:true}) {
        const { ctx, model } = this;
        const { page = 1, pageSize = 10 } = ctx.request.body;
        const offset = (page - 1) * pageSize;
        let data = [];
        let count = 0;
        if (paging) {
            let result = await model.findAndCountAll({
                limit: parseInt(pageSize),
                attributes,
                offset,
                where,
                order,
                include,
                distinct: true,
                raw
            });
            data = result.rows;
            count = result.count;
        } else {
            let result = await model.findAll({
                where,
                attributes,
                include,
                order
            });
            data = result;

        }
        return paging ? { data, count } : { data }
    }
    async add(info, uniqueAttr) {
        console.log(123,info)
        if (uniqueAttr) {
            let flag = await this.findOne(uniqueAttr, info[uniqueAttr])
            if (!flag) {
                return {
                    code: 500,
                    msg: "数据库已经存在同名称数据"
                }
            }
        }
       
        await this.model.create(info)
        return { msg: "添加成功" };
    }
    async delete(id) {
        let flag = await this.findOne('id', id);
        console.log(233,flag,this)
        if (flag) {
            return {
                code: 500,
                msg: "无法删除，该数据不存在"
            }
        }
        await this.model.destroy({
            where: {
                id
            }
        });
        return { msg: "删除成功" };
    }
    async edit(info) {
        let id = info.id;
        let flag = await this.findOne('id', id)
        console.log(123,flag)
        if (flag) {
            return {
                code: 500,
                msg: "无法编辑,数据不存在"
            }
        }
        delete info.id;
        await this.model.update(info,{
            where: {
                id
            }
        })
        return { msg: "编辑成功" };
    }
    async detail(id) {
        let data = await this.model.findOne({ where: { id } })
        return { data }
    }
    /**
     * 
     * @param {*} type 表字段  id  password...
     * @param {*} value 值
    */
    async findOne(type, value) {
        const data = await this.model.findOne({ where: { [type]: value } })
        console.log(123,data)
        return data === null;
    }

    /**
     * 
     * @param {id  showTag:是否显示  type:表名} param0 
     */
    async isShow({id,showTag,modelId}){
        const { ctx, app } = this;
        let val = showTag == 'true'?1:0;
        const modelName = app.config.modelEnum[modelId]
        await this.app.model[modelName].update({'enable':val},{
            where:{
                id
            }
        });
        return { msg: "修改成功" };
    }

    /**
     * 
     * @param {* 数据id *} id 
     * @param {* 表id *} modeId
     * @param {* 是否软删除  1软删除  0真删除 *} soft
     * 
     */
    async deleteCommon({id,modelId,soft = 0}){
        const { ctx, app } = this;
        const modelName = app.config.modelEnum[modelId]
        if(soft === 0){
            let res = await app.model[modelName].destroy({
                where: {
                    id
                }
            });
            if(!res){
                return { msg: "删除失败" };
            }
        }else{
            //软删除
        }
        return { msg: "删除成功" };
        
    }
}
module.exports = BaseService;
