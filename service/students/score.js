const { ormDb } = require('../../sequelize/index')

const { studentsAchievement } = require('../../model/index.js')

async function addScore (ctx) {
  const { id: studentId } = ctx.params
  const { body } = ctx.request
  const res = await studentsAchievement.create(
    Object.assign(
      body,
      {
        studentId,
        isRemoved: false
      }
    )
  )

  if (res) {
    ctx.body = true
  }
}

module.exports = {
  addScore
}