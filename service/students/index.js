const student = require('./student')
const score = require('./score')

module.exports = {
  ...student,
  ...score
}