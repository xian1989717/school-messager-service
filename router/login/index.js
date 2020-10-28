const Router = require('@koa/router')

const router = new Router()

const {
  redirect,
  login,
  randerHtml
} = require('../../service/login/index.js')

router
  .get('/', redirect)
  .get('/login', randerHtml)
  .post('/login', login)

module.exports = {
  loginRouter: router
}