const { HttpExpection } = require("../../config/httpExpection");

module.exports=(option,app)=>{

    return async function errorHandle(ctx,next){
        try{

            await next();
        }catch(err){
            ctx.app.emit('error',err,ctx);
            console.log('error_handle', err )
            if(err instanceof HttpExpection){
                ctx.body = {
                    errCode:err.errorCode,
                    msg:err.message
                };
                ctx.status = err.statusCode;
            }
            else if(err.name === 'SequelizeUniqueConstraintError'){
                ctx.body = {
                    errCode: 1002,
                    msg:'该名称数据已经存在！'
                };
                ctx.status = 400;
            }
            else{
                ctx.body = {
                    errorCode:err.errno || 001,
                    msg:err.message
                }
                ctx.status = 500
            }
            
            // console.log(222,err)
            // ctx.error(ctx, 400,err.message)

        }
    }
}