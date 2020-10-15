// const formidable = require('formidable')

const { query } = require('../../mysql.config')
const { teacher, teachSubject } = require('../../model/index.js')

const {
  selectTeacherAllSql,
  selectTeacherByIdSql
} = require('../../sql/index')

async function addTeacher (ctx) {
  const res = await teacher.create(
    Object.assign(
      ctx.request.body,
      { isRemoved: false }
    )
  )
  if (res) {
    ctx.body = true
  }
}
async function selectTeacherAll (ctx) {
  ctx.body = await query(selectTeacherAllSql)
}

async function selectTeacherOne (ctx) {
  ctx.body = await query(selectTeacherByIdSql, {
    replacements: {
      id: 1
    }
  })
}

async function selectTeachSubjectAll (ctx) {
  ctx.body = await teachSubject.findAll({
    attributes: ['id', 'name', 'remark'],
    where: {
      is_removed: false
    }
  })
}


module.exports = {
  addTeacher,
  selectTeacherAll,
  selectTeacherOne,
  selectTeachSubjectAll
}
