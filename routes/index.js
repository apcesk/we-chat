const query = require('../app/service/mysql')
const sha1 = require('sha1');
// 路由组件
const Router = require('koa-router');
const Config = require('../config');
const EmployeeRouter = require('./employee');
const Routes = new Router({
    prefix: Config.prefix
});

// 工作人员路由挂载
// EmployeeRouter.routes.forEach(e => {
//     Routes[e.methods](EmployeeRouter.name + e.path, e.realize);
// });
Routes.get('/', async (ctx) => {
    // let _sql = 'select * from test'
    // const result = await query(_sql)
    // ctx.response.body = result
    console.log(ctx.header.token);
    if (ctx.query.signature && ctx.query.timestamp && ctx.query.nonce && ctx.query.echostr) {
        let arr = [ctx.header.token, ctx.query.timestamp, ctx.query.nonce]
        arr.sort();
        let str = arr.join('');
        console.log(str);
        str = sha1(str);
        if (ctx.query.signature === str) {
            // 说明请求来自于微信
            ctx.response.body = ctx.query.echostr;
            return;
        }
        ctx.response.body = str;
        return;
    }
    // console.log(ctx)
    ctx.response.body = ctx.query.id;
})
module.exports = Routes;