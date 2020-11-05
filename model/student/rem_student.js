const { DataTypes } = require('sequelize')
const { ormDb } = require('../../sequelize/index')

const students = ormDb.define(
  'students',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    studentNo: {
      type: DataTypes.CHAR,
      allowNull: false,
      field: 'student_no',
    },
    name: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    nation: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    sex: {
      type: DataTypes.ENUM,
      values: ['male', 'female'],
      allowNull: false,
      defaultValue: 'male'
    },
    contactPhone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      field: 'contact_phone'
    },
    contacts: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isRemoved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_removed',
      defaultValue: false
    }
  }
)

module.exports = students
