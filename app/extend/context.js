const Cryptojs = require('crypto-js');
const jwt = require('jsonwebtoken');
const mkdirp = require('mz-modules/mkdirp');
const dayjs = require('dayjs');
const path = require('path');
const pump = require('mz-modules/pump');
const fs = require('fs');
module.exports = {
    get jwt() {
        return jwt
    },
    crypto(value) {
        return Cryptojs.HmacSHA256(value, 'wanghao_1991').toString();
    },
    md5(value) {
        return Cryptojs.MD5(value).toString().toUpperCase()
            ;
    },
    success(ctx, { code = 0, msg = '', data = null, count } = {}) {
        ctx.body = {
            code,
            msg,
            data,
            count
        }
    },
    error(ctx, code, msg = '', data = null) {
        ctx.body = {
            code,
            msg,
            data
        }
    },
    awaitWrap(promise) {

        return promise.then(data => {
            return [null, data]
        }).catch(err => {
            return [err, null]
        })
    },
    async addFile(ctx, service) {
        const parts = ctx.multipart({ autoFields: true });
        const files = [];
        let stream;

        while ((stream = await parts()) != null) {
            console.log(332, stream)
            if (!stream.filename) break;

            const fileName = stream.filename.toLowerCase();
            const fieldName = stream.fieldname;
            const target = await this.getUpLoadFile(ctx,fileName);
            const writeStream = fs.createWriteStream(target.uploadDir);
            await pump(stream, writeStream);
            files.push({
                [fieldName]: target
            })
        }

        ctx.success(ctx, { data: { file: files, fields: parts.fields } })
    },
    async getUpLoadFile(ctx,fileName) {
        const { config } = this.app;
        //console.log(11,ctx,this)
        let days = dayjs().format('YYYYMMDD');
        let dir = path.join(config.uploadPath, days)
        await mkdirp(dir)

        let times = await dayjs().valueOf();
        console.log(33, times)
        let uploadDir = path.join(dir, times + path.extname(fileName));
        return {
            uploadDir: uploadDir,
            saveDir: uploadDir.slice(3).replace(/\\/g, '/')
        }
    },
    // checkModelId(ctx,id){
    //     let modelMap = ctx.app.config.modelEnum;
    //     let modelName = modelMap[id];
    //     if(!modelName){
    //         new 
    //     }
    // }
}