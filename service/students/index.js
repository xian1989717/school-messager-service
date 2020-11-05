const student = require('./student')
const score = require('./score')
const chart = require('./chart')
const attachment = require('./attachment')

module.exports = {
  ...student,
  ...score,
  ...chart,
  ...attachment
}
