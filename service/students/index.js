const student = require('./student')
const score = require('./score')
const chart = require('./chart')

module.exports = {
  ...student,
  ...score,
  ...chart
}