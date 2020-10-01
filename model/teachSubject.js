const { DataTypes } = require('sequelize')
const { ormDb } = require('../sequelize/index')

const teachSubject = ormDB.define('teach_subject', {
  id: { type: DataTypes.INTEGER, primaryKey: true },
  name: { type: DataTypes.TEXT, allowNull: false },
  remark: { type: DataTypes.TEXT, allowNull: true },
  isRemoved: { type: DataTypes.BOOLEAN, allowNull: false }
})

module.exports = teachSubject