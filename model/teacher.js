const { DataTypes } = require('sequelize')
const { ormDb } = require('../sequelize/index')

const teacher = ormDb.define(
  'teacher',
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: { type: DataTypes.TEXT, allowNull: false },
    age: { type: DataTypes.TINYINT, allowNull: false },
    positionaltitles: { type: DataTypes.CHAR, allowNull: true },
    personId: { type: DataTypes.CHAR, allowNull: false },
    graduateSchool: { type: DataTypes.CHAR, allowNull: false },
    speciality: { type: DataTypes.CHAR, allowNull: false },
    studiesTime: { type: DataTypes.TIME, allowNull: true },
    workStartTime: { type: DataTypes.TIME, allowNull: false },
    sex: { type: DataTypes.CHAR, allowNull: false },
    graduationTime: { type: DataTypes.TIME, allowNull: false },
    obtainpositionalTitlesTime: { type: DataTypes.TIME, allowNull: true },
    administrativePosition: { type: DataTypes.CHAR, allowNull: true },
    address: { type: DataTypes.CHAR, allowNull: false },
    phone: { type: DataTypes.INTEGER, allowNull: false },
    sosPerson: { type: DataTypes.CHAR, allowNull: true },
    sosPersonPhone: { type: DataTypes.INTEGER, allowNull: true },
    isClassTeacher: { type: DataTypes.BOOLEAN, allowNull: false },
    teachSubject: { type: DataTypes.CHAR, allowNull: false },
    isPartyMember: { type: DataTypes.BOOLEAN, allowNull: false },
    remark: { type: DataTypes.TEXT, allowNull: true },
    isRemoved: { type: DataTypes.BOOLEAN, allowNull: false }
  },
  {
    freezeTableName: true
  }
)

module.exports = teacher