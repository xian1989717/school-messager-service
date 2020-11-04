const { ormDb } = require('../../sequelize/index')

const { students, address } = require('../../model/index.js')

async function getAllStudents (ctx) {

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

module.exports = {
  getAllStudents,
  addStudent
}