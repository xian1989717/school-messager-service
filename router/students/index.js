const Router = require('@koa/router')

const router = new Router()

const {
  getAllStudents,
  addStudent,
  deleteStudent,
  updateStudent,
  getAllScore,
  addScore
} = require('../../service/students')

router
  .get('/students', getAllStudents)
  .post('/students', addStudent)
  .delete('/students/:id', deleteStudent)
  .patch('/students/:id', updateStudent)
  .get('/students/:studentId/score', getAllScore)
  .post('/students/:studentId/score', addScore)

module.exports = router