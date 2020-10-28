async function randerHtml (ctx) {
  const { messagerInfo } = ctx.session

  if (messagerInfo.account && messagerInfo.password) {
    ctx.redirect('http://localhost:8080')
  }
  await ctx.render('login')
}

async function login (ctx) {
  ctx.session.messagerInfo = ctx.request.body
  ctx.body = true
}

async function redirect (ctx) {
  ctx.response.redirect('/login')
}

module.exports = {
  redirect,
  login,
  randerHtml
}