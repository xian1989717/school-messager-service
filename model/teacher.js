const { DataTypes } = require('sequelize')
const { ormDb } = require('../sequelize/index')

const teacher = ormDb.define(
  'teacher',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    age: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    positionalTitles: {
      type: DataTypes.CHAR,
      allowNull: true,
      field: 'positional_titles',
      defaultValue: 'primary'
    },
    personId: {
      type: DataTypes.CHAR,
      allowNull: false,
      field: 'person_id',
      defaultValue: ''
    },
    graduateSchool: {
      type: DataTypes.CHAR,
      allowNull: false,
      field: 'graduate_school',
      defaultValue: ''
    },
    speciality: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    studiesTime: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'studies_time'
    },
    workStartTime: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'work_start_time',
      defaultValue: '1000-10-10 10:10:10'
    },
    sex: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: 'male'
    },
    graduationTime: {
      type: DataTypes.TIME,
      allowNull: false,
      field: 'graduation_time',
      defaultValue: '1000-10-10 10:10:10'
    },
    obtainPositionalTitlesTime: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'obtain_positional_titles_time'
    },
    administrativePosition: {
      type: DataTypes.CHAR,
      allowNull: true,
      field: 'administrative_position',
      defaultValue: ''
    },
    address: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: ''
    },
    phone: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    sosPerson: {
      type: DataTypes.CHAR,
      allowNull: true,
      field: 'sos_person',
      defaultValue: ''
    },
    sosPersonPhone: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'sos_person_phone'
    },
    isClassTeacher: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_class_teacher',
      defaultValue: false
    },
    teachSubjectId: {
      type: DataTypes.CHAR,
      allowNull: false,
      field: 'teach_subject_id'
    },
    isPartyMember: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'is_party_member',
      defaultValue: false
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
  },
  {
    freezeTableName: true
  }
)

module.exports = teacher