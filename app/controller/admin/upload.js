'use strict';

const BaseController = require('./base');
const pump = require('mz-modules/pump');
const fs = require('fs');
const jimp = require('jimp');
const path = require('path');

class UploadController extends BaseController {
  constructor(ctx){
    super(ctx,'upload')
  }
  //文件上传
  async add() {
    const {ctx,service} = this;
    const parts = ctx.multipart({autoFields:true});
    const files = [];
    let stream;

    while((stream = await parts())!= null){
        if(!stream.filename)break;   
        const fileName = stream.filename.toLowerCase();
        const target = await service.admin.upload.getUpLoadFile(fileName);
        const writeStream = fs.createWriteStream(target.uploadDir);
        await pump(stream,writeStream);
        files.push(target)   
    }
    let res = await service.admin.upload.add(files,parts.fields)
    ctx.success(ctx,res)
  }


  //文件缩略图
  async addLimit(){
    const {ctx,service} = this;
    const parts = ctx.multipart({autoFields:true});
    const files = [];
    let stream;

    while((stream = await parts())!= null){
        if(!stream.filename)break;   
        const fileName = stream.filename.toLowerCase();
        const target = await service.admin.upload.getUpLoadFile(fileName);       
        const pathName =  target.uploadDir;
        const writeStream = fs.createWriteStream(pathName);
        await pump(stream,writeStream);
        files.push(target)   

        jimp.read(pathName,(err,lenna)=>{
          if(err) throw err;
          lenna.resize(200,200).quality(70).write(pathName+'200_200'+path.extname(pathName))
        })
    }
    let res = await service.admin.upload.add(files,parts.fields)
    ctx.success(ctx,res)
  }
}

module.exports = UploadController;
