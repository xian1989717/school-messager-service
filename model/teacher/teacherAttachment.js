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
      type: DataTypes.TEXT(50),
      allowNull: false
    },
    size: {
      type: DataTypes.TEXT(20),
      allowNull: false
    },
    uploadTime: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'upload_time'
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isRemoved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_removed'
    },
    attachmentKey: {
      type: DataTypes.TEXT(50),
      allowNull: false,
      field: 'attachment_key'
    }
  }
)

module.exports = teacherAttachment