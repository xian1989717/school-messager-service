const Router = require('@koa/router')

const router = new Router()

const {
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
} = require('../../service/index.js')

router
  // 教师模块
  .post('/teacher', addTeacher)
  .get('/teacher', selectTeacherAll)
  .get(`/teacher/:id`, selectTeacherOne)
  .delete('/teacher/:id', deleteTeacher)
  .put('/teacher/:id', updateTeahcher)
  .get(`/teachSubject`, selectTeachSubjectAll)
  .get(`/teacher/attachment/:id`, selectTeacherAttachment)
  .post(`/teacher/attachment/:id`, addTeacherAttachment)
  .put('/teacher/:teacherId/attachment/:id', updateTeacherAttachment)
  .get('/teacher/:teacherId/attachment/:id/download', downLoadTeacherAttachment)
  .delete('/teacher/:teacherId/attachment/:id', deleteTeacherAttachment)

module.exports = router