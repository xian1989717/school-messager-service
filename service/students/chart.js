const { ormDb } = require('../../sequelize/index')

const { studentsAchievement } = require('../../model/index.js')

async function getChart (ctx) {
  const { studentId } = ctx.params
  const { grade, semester } = ctx.query
  const subject = studentsAchievement.findAll({
    attributes: ['subjectId'],
    where: {
      studentId,
      grade,
      semester,
      isRemoved: false
    }
  })
  const totalScore = studentsAchievement.findAll({
    attributes: ['totalScore'],
    where: {
      studentId,
      grade,
      semester,
      isRemoved: false
    }
  })
  const testScores = studentsAchievement.findAll({
    attributes: ['testScores'],
    where: {
      studentId,
      grade,
      semester,
      isRemoved: false
    }
  })

  const res = await Promise.all([subject, totalScore, testScores])
  ctx.body = {
    subject: res[0],
    totalScore: res[1],
    testScores: res[2]
  }
}

module.exports = {
  getChart
}