const selectStudentsSql = /* sql */ `
  SELECT
    s.student_no studentNo,
    s.name,
    s.birthday,
    s.nation,
    s.sex,
    s.contact_phone contactPhone,
    s.contacts,
    s.remark,
    a.type,
    a.habitation_type habitationType,
    a.province,
    a.city,
    a.district,
    a.detailed_address detailedAddress
  FROM
    students s
  JOIN
    address a
  ON a.relation_id = s.id
  AND a.is_removed = FALSE
  WHERE
    s.is_removed = FALSE
`

const selectStudentSql = /* sql */ `
 SELECT
    s.student_no studentNo,
    s.name,
    s.birthday,
    s.nation,
    s.sex,
    s.contact_phone contactPhone,
    s.contacts,
    s.remark,
    a.type,
    a.habitation_type habitationType,
    a.province,
    a.city,
    a.district,
    a.detailed_address detailedAddress
  FROM
    students s
  JOIN
    address a
  ON a.relation_id = s.id
  AND a.is_removed = FALSE
  WHERE
    s.is_removed = FALSE
  AND s.id = :id
`

module.exports = {
  selectStudentsSql,
  selectStudentSql
}