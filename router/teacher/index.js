const Router = require('@koa/router')

const router = new Router()

const {
  addTeacher,
  selectTeacherAll,
  selectTeacherOne,
  deleteTeacher,
  selectTeachSubjectAll,
  selectTeacherAttachment,
  addTeacherAttachment,
  updateTeacherAttachment,
  downLoadTeacherAttachment,
} = require('../../service/index.js')

router
  // 教师模块
  .post('/teacher', addTeacher)
  .get('/teacher', selectTeacherAll)
  .get(`/teacher/:id`, selectTeacherOne)
  .delete('/teacher/:id', deleteTeacher)
  .get(`/teachSubject`, selectTeachSubjectAll)
  .get(`/teacher/attachment/:id`, selectTeacherAttachment)
  .post(`/teacher/attachment/:id`, addTeacherAttachment)
  .put('/teacher/:teacherId/attachment/:id', updateTeacherAttachment)
  .post('/teacher/attachment/download/:id', downLoadTeacherAttachment)

module.exports = {
  teacherRouter: router
}