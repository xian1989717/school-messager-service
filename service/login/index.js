const { user } = require('../../model/index.js')
const { httpUrl } = require('../../const.js')
async function randerHtml (ctx) {
  const { userinfo } = ctx.session

  if (userinfo && userinfo.account && userinfo.password) {
    ctx.redirect(httpUrl)
  }
  await ctx.render('login')
}

async function login (ctx) {
  if (!ctx.session.userinfo) {
    const { account, password } = ctx.request.body
    const res = await user.findOne({
      where: {
        account,
        password,
        isRemoved: false
      }
    })
    if (res.length) {
      ctx.session.userinfo = ctx.request.body
    }
  }
  ctx.redirect(httpUrl)
}

async function registerHtml (ctx) {
  await ctx.render('register')
}

async function register (ctx) {
  const res = await user.create(
    Object.assign(
      ctx.request.body,
      { isRemoved: false }
    )
  )
  if (res) {
    ctx.body = true
  }
}

async function checkAccount (ctx) {
  const { userName } = ctx.query
  const res = await user.findAll({
    attributes: ['id'],
    where: {
      account: userName,
      isRemoved: false
    }
  })
  if (res.length) {
    ctx.body = '当前账号已被注册'
    return
  }
  ctx.body = '通过'
}

module.exports = {
  checkAccount,
  register,
  registerHtml,
  login,
  randerHtml
}
