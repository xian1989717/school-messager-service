const Router = require('@koa/router')

const router = new Router()

const {
  getAllStudents,
  addStudent,
  getAllScore,
  addScore
} = require('../../service/students')

router
  .get('/students', getAllStudents)
  .post('/students', addStudent)
  .get('/students/:id/score', getAllScore)
  .post('/students/:id/score', addScore)

module.exports = router