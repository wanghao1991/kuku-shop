
module.exports = (option,app)=>{

    return async (ctx,next)=>{
        const { authorization = '' } = ctx.header;
        if(!authorization){
            console.log('灭有访问权限')
            ctx.redirect('/admin/login')
        }
        let token = authorization.replace('Bearer ','');
        console.log(3333,token);
        let user = {};

        try{
            user = await ctx.jwt.verify(token,app.config.jwt.secret);
            console.log(333332323232323,user)
        }catch(err){
            console.log(err)
            ctx.body = {
                err
            }
        }
        console.log(333,user)
        await next();
    }
}