const Router = require('@koa/router')

const router = new Router()
const teacherRouter = require('./teacher')
const loginRouter = require('./login')


router.use(teacherRouter.routes())
router.use(loginRouter.routes())

module.exports = {
  router
}
