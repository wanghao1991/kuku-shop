'use strict';

const BaseController = require('./base')

class FocusController extends BaseController {
  constructor(ctx){
      super(ctx,'focus')
  }
  /**
   * 新增
   */
  async add(){
    const {ctx} = this;
    let res = await super.add({
        title:'string',
        focus_img:'int'
    })
    ctx.success(ctx,res)
  }
  /**
   * 编辑
   */
  async edit(){
    const {ctx,service} = this;
    const file = await super.upload()
    const res = await service.admin.focus.add(file)
    ctx.success(ctx,res)
  }

}

module.exports = FocusController;
