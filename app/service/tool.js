'use strict';
const svgCaptcha = require('svg-captcha'); //验证码插件
const Service = require('egg').Service;

class ToolService extends Service {
  async captcha() {
    let captcha = svgCaptcha.createMathExpr({
        mathMin:1,
        mathMax:50,
        mathOperator:'+'
    });
    this.ctx.session.verifiCode = captcha.text; //验证码结果信息
    return captcha;
  }
}

module.exports = ToolService;
