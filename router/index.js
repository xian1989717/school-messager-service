const Router = require('@koa/router')

const router = new Router()
const teacherRouter = require('./teacher')
const loginRouter = require('./login')
const studentsRouter = require('./students')

router.use(teacherRouter.routes())
router.use(loginRouter.routes())
router.use(studentsRouter.routes())

module.exports = {
  router
}
