const Router = require('@koa/router')

const router = new Router()

const {
  getAllStudents,
  addStudent
} = require('../../service/students')

router
  .get('/students', getAllStudents)
  .post('/students', addStudent)
module.exports = router