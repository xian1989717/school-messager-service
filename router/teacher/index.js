const Router = require('@koa/router')

const router = new Router()

const {
  addTeacher,
  selectTeacherAll,
  selectTeacherOne,
  selectTeachSubjectAll,
  selectTeacherAttachment,
  addTeacherAttachment
} = require('../../service/index.js')

router
  // 教师模块
  .post('/teacher', addTeacher)
  .get('/teacher', selectTeacherAll)
  .get(`/teacher/:id`, selectTeacherOne)
  .get(`/teachSubject`, selectTeachSubjectAll)
  .get(`/teacher/attachment/:id`, selectTeacherAttachment)
  .post(`/teacher/attachment/:id`, addTeacherAttachment)

module.exports = {
  teacherRouter: router
}