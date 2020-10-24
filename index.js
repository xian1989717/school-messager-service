const Koa = require('koa')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const compress = require('koa-compress')

const {
  teacherRouter
} = require('./router/index')

const app = new Koa()

app.use(compress({ threshold: 1024 }))
app.use(cors())
app.use(bodyParser())

app
  .use(teacherRouter.routes())
  .use(teacherRouter.allowedMethods())

app.listen(3000, () => {
  console.log('service is running!post is 3000')
})