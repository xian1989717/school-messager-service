const teacher = require('./teacher')
const user = require('./user')

module.exports = {
  ...user,
  ...teacher
}
