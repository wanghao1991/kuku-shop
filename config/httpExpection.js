class HttpExpection extends Error{
    constructor(message="服务器错误",errorCode=10001,statusCode=500){
        super();
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.message = message;
    }

}
class Success extends HttpExpection{
    constructor(msg,errorCode){
        super()
        this.statusCode = 200;
        this.message = msg || '';
        this.errorCode = errorCode || '';
    }
}
class ParamExpection extends HttpExpection{
    constructor(msg,errorCode){
        super()
        this.statusCode = 400;
        this.message = msg || '参数有误';
        this.errorCode = errorCode || 10000;
    }
}
class NotFund extends HttpExpection{
    constructor(msg,errorCode){
        super()
        this.statusCode = 404;
        this.message = msg || '资源未找到';
        this.errorCode = errorCode || 10001;
    }
}
class AuthFaild extends HttpExpection{
    constructor(msg,errorCode){
        super()
        this.statusCode = 401;
        this.message = msg || '授权失败';
        this.errorCode = errorCode || 10002;
    }
}
class Forbidden extends HttpExpection{
    constructor(msg,errorCode){
        super()
        this.statusCode = 404;
        this.message = msg || '禁止访问';
        this.errorCode = errorCode || 10003;
    }
}
class ForbiddenDel extends HttpExpection{
    constructor(msg,errorCode){
        super()
        this.statusCode = 400;
        this.message = msg || '禁止删除';
        this.errorCode = errorCode || 10003;
    }
}
class HasSameName extends HttpExpection{
    constructor(msg,errorCode){
        super()
        this.statusCode = 400;
        this.message = msg || '数据库已经存在同名数据！';
        this.errorCode = errorCode || 10003;
    }
}
class modelIdError extends HttpExpection{
    constructor(msg,errorCode){
        super()
        this.statusCode = 400;
        this.message = msg || 'modelId 参数有误！';
        this.errorCode = errorCode || 10003;
    }
}
module.exports = {
    HttpExpection,
    Success,
    ParamExpection,
    NotFund,
    AuthFaild,
    Forbidden,
    ForbiddenDel,
    HasSameName,
    modelIdError
}