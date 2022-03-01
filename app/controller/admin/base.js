'use strict';

const { mode } = require('crypto-js');
const svgCaptcha = require('svg-captcha'); //验证码插件
const { modelIdError } = require("../../../config/httpExpection");
const {ParamValitator,commonIdSchema, isShowSchema, deleteCommmonSchema} = require('../../../config/paramschema');
const Controller = require('egg').Controller;

class BaseController extends Controller {
  /**
   * 
   * @param {*} ctx 
   * @param {* 对应 service文件 名称} serviceName 
   */
  constructor(ctx, moduleName,serviceName) {
    super(ctx)
    this.serviceCon = moduleName && serviceName && this.ctx.service.admin[moduleName][serviceName];
  }


  /**
   * 列表
   */
  async index(ctx,paramSchema) {
    console.log("----+++-----",ctx.request.body)
    console.log("------------",ctx.request.query)
    const { serviceCon } = this;
    if(Array.isArray(paramSchema)){
      paramSchema.forEach(item=>{
        new ParamValitator(item,ctx.request.body)
      })
    }else{
      
      paramSchema && new ParamValitator(paramSchema,ctx.request.body)
    }
    let res = await serviceCon.index(ctx.request.body);  
    if(paramSchema){
      return res;
    }else{
      ctx.success(ctx,res)
    }  
  }

  /**
   * 新增
   */
  async add(paramSchema,uniqueAttr) {
    const { ctx, serviceCon } = this;
    //verifiParam&&ctx.validate(verifiParam);
    if(Array.isArray(paramSchema)){
      paramSchema.forEach(item=>{
        new ParamValitator(item,ctx.request.body)
      })
    }else{
      paramSchema && new ParamValitator(paramSchema,ctx.request.body)
    }
   
    let res = await serviceCon.add(ctx.request.body,uniqueAttr);
    return res;
  }

  /**
   * 删除
   */
  async delete() {
    const { ctx, serviceCon } = this;
    console.log(123,ctx.request.query)
    new ParamValitator(commonIdSchema,ctx.request.query)
    const {id} = ctx.request.query;
    let res = await serviceCon.delete(id);
    ctx.success(ctx,res)
  }

  /**
   * 修改
   */
  async edit(paramSchema) {
    const { ctx, serviceCon } = this;
    
    if(Array.isArray(paramSchema)){
      paramSchema.forEach(item=>{
        new ParamValitator(item,ctx.request.body)
      })
    }else{
      paramSchema && new ParamValitator(paramSchema,ctx.request.body)
    }
    let res = await serviceCon.edit(ctx.request.body);
    return res;
  }

  /**
   * 详情
   */
  async detail(paramSchema) {
    const { ctx, serviceCon } = this;
    new ParamValitator(commonIdSchema,ctx.request.query)
    const {id} = ctx.request.query;
    let res = await serviceCon.detail(id);
    ctx.success(ctx,res)
  }


  //是否显示
  async isShow(){
    const { ctx, serviceCon } = this;
    new ParamValitator(commonIdSchema,ctx.request.query)
    new ParamValitator(isShowSchema,ctx.request.query)
    let res = await this.ctx.service.admin.base.isShow(ctx.request.query);
    ctx.success(ctx,res)
  }

  /**
   * 公共删除
   * params :  id-数据id   modelId-表id  soft-是否软删除 1是  0或者不传真删除
   */
  async deleteCommon(){
    const { ctx } = this;
    let query = ctx.request.query;
    new ParamValitator(deleteCommmonSchema,query)
    let res = await this.ctx.service.admin.base.deleteCommon(query);
    ctx.success(ctx,res)
  }
  

  async listCommon(){

  }





  async success(info) {

    this.ctx.body = {
      code: 200,
      message: info
    }
  }
  async error(code, err) {
    this.ctx.body = {
      code: code,
      message: err
    }
  }
  async verify() {

    //  console.log(1223,this.ctx.session.verifiCode)

    let captcha = await this.ctx.service.tool.captcha();  //返回页面一张图片
    this.ctx.response.type = 'image/svg+xml';  //指定返回类型
    this.ctx.body = captcha.data;
  }
}

module.exports = BaseController;
