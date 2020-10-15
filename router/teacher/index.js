const Router = require('@koa/router')

const router = new Router()

const {
  addTeacher,
  selectTeacherAll,
  selectTeacherOne,
  selectTeachSubjectAll
} = require('../../service/index.js')

router
  // 教师模块
  .post('/teacher', addTeacher)
  .get('/teacher', selectTeacherAll)
  .get(`/teacher/:id`, selectTeacherOne)
  .get(`/teachSubject`, selectTeachSubjectAll)

module.exports = {
  teacherRouter: router
}