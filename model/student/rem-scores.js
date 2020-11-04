const { DataTypes } = require('sequelize')
const { ormDb } = require('../../sequelize/index')

const studentsAchievement = ormDb.define(
  'students_achievement',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'student_id'
    },
    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'subject_id'
    },
    testScores: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'test_scores'
    },
    totalScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'total_score',
      defaultValue: 100
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    semester: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['1', '2'],
      defaultValue: '1'
    },
    isTest: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      field: 'is_test'
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isRemoved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_removed'
    }
  }
)

module.exports = studentsAchievement