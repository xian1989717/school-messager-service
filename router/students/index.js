const Router = require('@koa/router')

const router = new Router()

const {
  getAllStudents,
  addStudent,
  addScore
} = require('../../service/students')

router
  .get('/students', getAllStudents)
  .post('/students', addStudent)
  .post('/students/:id/score', addScore)

module.exports = router