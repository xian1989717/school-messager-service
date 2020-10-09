const { DataTypes } = require('sequelize')
const { ormDb } = require('../sequelize/index')

const teachSubject = ormDb.define(
  'teach_subject',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    remark: { type: DataTypes.TEXT, allowNull: true },
    is_removed: { type: DataTypes.BOOLEAN, allowNull: false }
  },
  {
    freezeTableName: true
  }
)

module.exports = teachSubject