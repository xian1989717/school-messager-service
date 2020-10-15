const Koa = require('koa')
const {
  teacherRouter
} = require('./router/index')

const app = new Koa()

const bodyParser = require('koa-bodyparser')

app.use(bodyParser())
app
  .use(teacherRouter.routes())
  .use(teacherRouter.allowedMethods())

app.listen(3000, () => {
  console.log('service is running!post is 3000')
})