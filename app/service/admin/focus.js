'use strict';

const BaseService  = require('./base');

class FocusService extends BaseService {
  
    constructor(ctx){
        super(ctx,'Focus');
    }
    async index(){
        const {ctx} = this;
        let data = await super.index({
            paging:false,
            attributes:['id','title','link','sort','status'],
            include:{
                model:ctx.model.File,
                attributes:['id','path']
            }
        })
        return {data}
    }
    
}

module.exports = FocusService;
