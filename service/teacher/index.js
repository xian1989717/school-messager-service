const formidable = require('formidable')

const { query } = require('../../mysql.config')
const { teacher, teachSubject } = require('../../model/index.js')

const {
  selectTeacherAllSql,
  selectTeacherByIdSql
} = require('../../sql/index')

async function addTeacher (ctx) {
  const form = new formidable.IncomingForm()

  await new Promise((resolve, reject) => {
    form.parse(ctx.req, async (err, fields, files) => {
      if (err) {
        reject(err)
        return
      }
      const res = await teacher.create(Object.assign(fields, { isRemoved: false }))
      if (res) {
        ctx.body = true
        resolve()
      }
    })
  })
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
