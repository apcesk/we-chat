const query = require('../app/service/mysql')
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
    if (ctx.query.signature && ctx.query.timestamp && ctx.query.timestamp && ctx.query.nonce && ctx.query.echostr) {
        ctx.response.body = ctx.query.echostr
        return;
    }
    ctx.response.body = ctx.query;
})
module.exports = Routes;