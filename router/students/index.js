const Router = require('@koa/router')

const router = new Router()

const {
  getAllStudents,
  addStudent,
  deleteStudent,
  updateStudent,
  getStudentById,
  getAllScore,
  addScore,
  deleteScore,
  updateScore,
  getChart
} = require('../../service/students')

router
  .get('/students', getAllStudents)
  .post('/students', addStudent)
  .delete('/students/:id', deleteStudent)
  .put('/students/:id', updateStudent)
  .get('/students/:id', getStudentById)
  .get('/students/:studentId/score', getAllScore)
  .post('/students/:studentId/score', addScore)
  .delete('/students/:studentId/score/:id', deleteScore)
  .put('/students/:studentId/score/:id', updateScore)
  .get('/students/:studentId/chart', getChart)

module.exports = router