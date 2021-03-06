const { ormDb } = require('../../sequelize/index')

const { studentsAchievement } = require('../../model/index.js')

async function getAllScore (ctx) {
  const { studentId } = ctx.params
  ctx.body = await studentsAchievement.findAll(
    {
      attributes: [
        'id',
        'studentId',
        'subjectId',
        'testScores',
        'totalScore',
        'grade',
        'semester',
        'isTest',
        'remark'
      ],
      where: {
        studentId,
        isRemoved: false
      }
    }
  )
}

async function addScore (ctx) {
  const { studentId } = ctx.params
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

async function deleteScore (ctx) {
  const { id, studentId } = ctx.params
  const res = await studentsAchievement.update(
    { isRemoved: true },
    { where: { id, studentId } }
  )
  if (res) {
    ctx.body = true
  }
}
async function updateScore (ctx) {
  const { id, studentId } = ctx.params
  const { body } = ctx.request
  const res = await studentsAchievement.update(
    body,
    { where: { id, studentId } }
  )
  if (res) {
    ctx.body = true
  }
}

module.exports = {
  addScore,
  getAllScore,
  deleteScore,
  updateScore
}
