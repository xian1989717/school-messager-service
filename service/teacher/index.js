const { teacher } = require('../../model/index.js')

module.exports = {
  addTeacher (ctx) {
    console.log(teacher.create)
  },
  selectTeacherAll (ctx) {
    console.log(ctx)
  }
}
