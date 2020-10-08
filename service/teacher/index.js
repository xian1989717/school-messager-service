const { query } = require('../../mysql.config')
const { teacher } = require('../../model/index.js')

const {
  selectTeacherAllSql,
  selectTeacherByIdSql
} = require('../../sql/index')

module.exports = {
  addTeacher (ctx) {
    console.log(teacher.create)
  },
  async selectTeacherAll (ctx) {
    ctx.body = await query(selectTeacherAllSql)
  },
  async selectTeacherOne (ctx) {
    ctx.body = await query(selectTeacherByIdSql, {
      replace: {

      }
    })
  }
}
