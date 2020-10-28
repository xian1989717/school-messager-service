const Router = require('@koa/router')

const router = new Router()

const {
  login,
  randerHtml
} = require('../../service/login/index.js')

router
  .get('/login', randerHtml)
  .post('/login', login)

module.exports = {
  loginRouter: router
}