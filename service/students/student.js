const {
  ormDb
} = require('../../sequelize/index')
const {
  students,
  address,
  studentsAchievement
} = require('../../model/index.js')
const {
  query
} = require('../../mysql.config')
const {
  selectStudentsSql,
  selectStudentSql
} = require('../../sql/student')

const student = require('../../model/student')

async function getAllStudents (ctx) {
  ctx.body = await query(selectStudentsSql)
}

async function addStudent (ctx) {
  const {
    studentNo,
    birthday,
    contactPhone,
    contacts,
    name,
    sex,
    nation,
    detailedAddress,
    remark,
    district,
    city,
    province,
    type,
    habitationType
  } = ctx.request.body
  const studentData = { studentNo, birthday, contactPhone, contacts, name, nation, sex, remark }
  const addressData = { detailedAddress, district, city, province, type, habitationType }

  const res = await ormDb.transaction(async (t) => {
    const data = await students.create(
      Object.assign(
        studentData,
        {
          isRemoved: false
        }
      ),
      { transaction: t }
    )
    const addressResult = await address.create(
      Object.assign(
        addressData,
        {
          relationId: data.dataValues.id,
          isRemoved: false
        }
      ),
      { transaction: t }
    )

    if (addressResult) {
      ctx.body = true
      return
    }
  })
}

async function deleteStudent (ctx) {
  const { id } = ctx.params
  try {
    await ormDb.transaction(async (t) => {
      await students.update(
        { isRemoved: true },
        { where: { id } }
      )
      await address.update(
        { isRemoved: true },
        { where: { relationId: id } }
      )
      await studentsAchievement.update(
        { isRemoved: true },
        { where: { studentId: id } }
      )
    })
    ctx.body = true
  } catch { }
}

async function updateStudent (ctx) {
  const { id } = ctx.params
  const {
    studentNo,
    birthday,
    contactPhone,
    contacts,
    name,
    sex,
    nation,
    detailedAddress,
    remark,
    district,
    city,
    province,
    type,
    habitationType
  } = ctx.request.body

  const studentData = { studentNo, birthday, contactPhone, contacts, name, nation, sex, remark }
  const addressData = { detailedAddress, district, city, province, type, habitationType }
  try {
    ormDb.transaction(async (t) => {
      await students.update(
        studentData,
        { where: { id, isRemoved: false } }
      )
      await address.update(
        addressData,
        { where: { relationId: id, isRemoved: false } }
      )
    })
    ctx.body = true
  } catch { }
}

async function getStudentById (ctx) {
  const { id } = ctx.params
  const res = await query(selectStudentSql, { replacements: { id } })
  if (res) {
    ctx.body = res
  }
}

module.exports = {
  getAllStudents,
  addStudent,
  deleteStudent,
  updateStudent,
  getStudentById
}
