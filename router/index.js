const Router = require('@koa/router')

const router = new Router()

router
  .get('/', (ctx) => {
    ctx.body = 'true'
  })

module.exports = router
