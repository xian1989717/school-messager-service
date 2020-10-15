const { DataTypes } = require('sequelize')
const { ormDb } = require('../../sequelize/index')

const teacherAttachment = ormDb.define(
  'teacher_attachment',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'teacher_id'
    },
    name: {
      type: DataTypes.TEXT(20),
      allowNull: false
    },
    size: {
      type: DataTypes.TEXT(20),
      allowNull: false
    },
    uploadTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isRemoved: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }
)

module.exports = teacherAttachment