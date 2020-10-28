async function randerHtml (ctx) {
  const { messagerInfo } = ctx.session

  if (messagerInfo.account && messagerInfo.password) {
    ctx.redirect('http://localhost:8080')
  }
  await ctx.render('login')
}

async function login (ctx) {
  if (!ctx.session.messagerInfo) {
    ctx.session.messagerInfo = ctx.request.body
  }
  ctx.body = true
}

module.exports = {
  login,
  randerHtml
}