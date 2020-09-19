const Koa = require('koa')
const router = require('./router/index')

const app = new Koa()


app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('service is running!')
})