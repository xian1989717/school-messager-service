const { DataTypes } = require('sequelize')
const { ormDb } = require('../../sequelize/index')

const address = ormDb.define(
  'address',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    relationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'relation_id'
    },
    type: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['student', 'teacher']
    },
    habitationType: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['habitation','HouseholdRegister'],
      field: 'habitation_type'
    },
    province: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    city: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    district: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    detailedAddress: {
      type: DataTypes.CHAR,
      allowNull: false,
      field: 'detailed_address'
    },
    remark: {
      type: DataTypes.CHAR,
      allowNull: true
    },
    isRemoved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_removed'
    }
  }
)

module.exports = address