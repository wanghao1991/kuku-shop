'use strict';

const BaseController = require('./base')

class AccessController extends BaseController {
    constructor(ctx){
        super(ctx,'access')
    }
    async add() { 
        const { ctx } = this;
        let res = await super.add({
            type:'int',
            parent_id:'int',
            sort:'int'
        })
        ctx.success(ctx,res)
    }
    async edit() { //改

        this.ctx.body = '权限改'
    }
}

module.exports = AccessController;
