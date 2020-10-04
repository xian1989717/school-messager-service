const { query } = require('../../mysql.config')
const { teacher } = require('../../model/index.js')

const { selectTeacherAllSql } = require('../../sql/index')

module.exports = {
  addTeacher (ctx) {
    console.log(teacher.create)
  },
  async selectTeacherAll (ctx) {
    ctx.body = await query(selectTeacherAllSql)
  }
}
