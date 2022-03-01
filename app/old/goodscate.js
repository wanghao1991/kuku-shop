'use strict';

const BaseController = require('./base');

class GoodscateController extends BaseController {
    constructor(ctx) {
        super(ctx, 'goodscate')
    }
    async add() {
        const {ctx} = this;
        const res = await super.add({
            title:'string'
        })
        ctx.success(ctx,res)
    }
    async edit() {
        const {ctx} = this;
        const res = await super.edit({
            id:'int',
            title:'string'
        })
        ctx.success(ctx,res)
    }
}

module.exports = GoodscateController;
