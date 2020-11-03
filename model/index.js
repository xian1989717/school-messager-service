const teacher = require('./teacher')
const user = require('./user')
const students = require('./student')
module.exports = {
  ...user,
  ...teacher,
  ...students
}
