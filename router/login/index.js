const Router = require('@koa/router')

const router = new Router()

const {
  checkAccount,
  register,
  registerHtml,
  login,
  randerHtml
} = require('../../service/login/index.js')

router
  .get('/register/check', checkAccount)
  .get('/register', registerHtml)
  .post('/register', register)
  .get('/login', randerHtml)
  .post('/login', login)

module.exports = router