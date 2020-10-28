const Koa = require('koa')
const path = require('path')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const compress = require('koa-compress')
const session = require('koa-session')
const views = require('koa-views')

const {
  teacherRouter,
  loginRouter
} = require('./router/index')
const { nextTick } = require('process')

const app = new Koa()

app.keys = ['some secret hurr']
const CONFIG = {
  key: 'koa:sess',   //cookie key (default is koa:sess)
  maxAge: 1800,  // cookie的过期时间 maxAge in ms (default is 1 days)
  overwrite: true,  //是否可以overwrite    (默认default true)
  httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
  signed: true,   //签名默认true
  rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
  renew: false,  //(boolean) renew session when session is nearly expired,
}
// session
app.use(session(CONFIG, app))
// 添加模板引擎
app.use(views(path.join(__dirname, './public/view'), { extension: 'ejs' }))
// gizp压缩
app.use(compress({ threshold: 1024 }))
// 跨域
app.use(cors())
// 解析body
app.use(bodyParser())

app.use((ctx, next) => {
  if (ctx.request.path === '/') {
    ctx.response.redirect('/login')
  }
  next()
})
// 路由
app
  .use(loginRouter.routes())
  .use(loginRouter.allowedMethods())

app
  .use(teacherRouter.routes())
  .use(teacherRouter.allowedMethods())

app.listen(3000, () => {
  console.log('service is running!post is 3000')
})