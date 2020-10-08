const Router = require('@koa/router')

const router = new Router()

const {
  addTeacher,
  selectTeacherAll,
  selectTeacherOne
} = require('../../service/teacher/index.js')

router
  // 教师模块
  .post('/teacher/add', addTeacher)
  .get('/teacher/all', selectTeacherAll)
  .get(`/teacher/:id`, selectTeacherOne)

module.exports = {
  teacherRouter: router
}