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
    ctx.body = {
      id: ctx.request.body.id,
      state: true
    }
  }
}
async function selectTeacherAll (ctx) {
  ctx.body = await query(selectTeacherAllSql)
}

async function selectTeacherOne (ctx) {
  const { id } = ctx.params
  const data = await query(selectTeacherByIdSql, {
    replacements: {
      id
    }
  })
  ctx.body = data[0]
}

async function deleteTeacher (ctx) {
  const { id } = ctx.params
  const res = await teacher.update(
    {
      isRemoved: true
    },
    {
      where: {
        id
      }
    }
  )
  if (res.length === 1) {
    ctx.body = true
  }
}

async function updateTeahcher (ctx) {
  const { id } = ctx.params
  const { body } = ctx.request
  const res = await teacher.update(body, {
    where: {
      id,
      isRemoved: false
    }
  })
  if (res) {
    ctx.body = true
  }
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
    attributes: ['id', 'name', 'size', 'uploadTime', 'remark', 'attachmentKey'],
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
      const { size, name, lastModifiedDate, path } = files.file
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

async function deleteTeacherAttachment (ctx) {
  const { teacherId, id } = ctx.params
  const { attachmentKey } = ctx.query
  const res = await teacherAttachment.update(
    {
      isRemoved: true
    },
    {
      where: {
        id,
        teacherId
      }
    }
  )
  if (res.length === 1) {
    fs.unlinkSync(`public/imgs/teacher/${attachmentKey}`)
    ctx.body = true
  }
}

module.exports = {
  addTeacher,
  selectTeacherAll,
  selectTeacherOne,
  deleteTeacher,
  updateTeahcher,
  selectTeachSubjectAll,
  selectTeacherAttachment,
  addTeacherAttachment,
  updateTeacherAttachment,
  downLoadTeacherAttachment,
  deleteTeacherAttachment
}
