'use strict';

const mkdirp = require('mz-modules/mkdirp');
const dayjs = require('dayjs');
const path = require('path');
const BaseService = require('./base');

class UploadService extends BaseService {
  constructor(ctx) {
    super(ctx, 'Files')
  }
  /**
   * 
   *  获取文件上传名称
   *
   * */
  async getUpLoadFile(fileName) {
    const { ctx, config } = this;
    let days = dayjs().format('YYYYMMDD');
    let dir = path.join(config.uploadPath, days)
    await mkdirp(dir)
    let times = await dayjs().valueOf();
    let uploadDir = path.join(dir, times + path.extname(fileName));
    return {
      uploadDir: uploadDir,
      saveDir: uploadDir.slice(3).replace(/\\/g, '/')
    }
  }
  async add(files = [], fields = []) {
    const { ctx } = this;
    let fieldObj = {};
    if (fields.length > 0) {
      const bb = fields.map(item => {
        return {
          [item[0]]: item[1]
        }
      })
      fieldObj = Object.assign({}, ...bb)
    }
    console.log(222,fieldObj)
    let modelName;
    switch (fieldObj.model) {
      case '2':
        modelName = 'File'
        break;
    
      default:
        modelName = 'Images';
        break;
    }
    let filePromise = files.map(file => {
      return ctx.model[modelName].create({ path: file.saveDir,type:fieldObj.type})
    })
    let data = await Promise.all(filePromise);
    return {data}
  }
}

module.exports = UploadService;
