const fs = require('fs')
const formidable = require('formidable')
const send = require('koa-send')

const { query } = require('../../mysql.config')
const { teacher, teachSubject, teacherAttachment } = require('../../model/index.js')

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

async function selectTeacherAttachment (ctx) {
  ctx.body = await teacherAttachment.findAll({
    attributes: ['id', 'name', 'size', 'uploadTime', 'remark'],
    where: {
      isRemoved: false,
      teacherId: ctx.params.id
    }
  })
}

async function addTeacherAttachment (ctx) {
  const form = formidable({ multiples: true })
  form.uploadDir = 'public/imgs/'

  await new Promise((resolve, reject) => {
    form.parse(ctx.req, async (err, fields, files) => {
      if (err) {
        reject(err)
        return
      }
      const { size, name, lastModifiedDate, path } = files.img
      const formatSize = (size / 1000).toFixed(2) + 'kb'
      fs.renameSync(path, './public/imgs/teacher/' + name)
      const res = await teacherAttachment.create({
        teacherId: ctx.params.id,
        isRemoved: false,
        name,
        remark: null,
        size: formatSize,
        attachmentKey: name,
        uploadTime: lastModifiedDate
      })
      if (res) {
        ctx.body = true
        resolve()
      }
    })
  })
}

async function updateTeacherAttachment (ctx) {
  const { teacherId, id } = ctx.params
  const { body } = ctx.request
  const res = await teacherAttachment.update(body, {
    where: {
      id,
      teacherId,
      isRemoved: false
    }
  })
  if (res) {
    ctx.body = true
  }
}

async function downLoadTeacherAttachment (ctx) {
  const id = ctx.params.id
  const data = await teacherAttachment.findAll({
    attributes: ['attachmentKey'],
    where: {
      id,
      isRemoved: false
    }
  })
  const path = `public/imgs/teacher/${data[0].dataValues.attachmentKey}`
  ctx.attachment(path)
  await send(ctx, path)
}

module.exports = {
  addTeacher,
  selectTeacherAll,
  selectTeacherOne,
  selectTeachSubjectAll,
  selectTeacherAttachment,
  addTeacherAttachment,
  updateTeacherAttachment,
  downLoadTeacherAttachment
}
