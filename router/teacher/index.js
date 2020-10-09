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
  .post('/teacher/add', addTeacher)
  .get('/teacher/all', selectTeacherAll)
  .get(`/teacher/:id`, selectTeacherOne)
  .get(`/teachSubject/all`, selectTeachSubjectAll)

module.exports = {
  teacherRouter: router
}