'use strict';

const BaseService = require('./base');

class GoodscateService extends BaseService {
    constructor(ctx) {
        super(ctx, 'GoodsCate')
    }
    async index() {
        const {ctx} = this;
        const data = await super.index({
            attributes:['id','title','link','cate_img','sort','status'],
            include:{
                model:ctx.model.File
            }
        })
        return {data}     
    }
}

module.exports = GoodscateService;
