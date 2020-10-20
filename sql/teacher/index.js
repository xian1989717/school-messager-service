const selectTeacherAllSql = `
  select
    t.id,
    t.name,
    t.age,
    t.positional_titles positionalTitles,
    t.person_id personId,
    t.graduate_school graduateSchool,
    t.speciality,
    t.studies_time studiesTime,
    t.work_start_time workStartTime,
    t.sex gender,
    t.graduation_time graduationTime,
    t.obtain_positional_titles_time obtainPositionalTitlesTime,
    t.administrative_position administrativePosition,
    t.address,
    t.phone,
    t.sos_person sosPerson,
    t.sos_person_phone sosPersonPhone,
    if(t.is_class_teacher = 1,'true','false') isClassTeacher,
    if(t.is_party_member = 1,'true','false') isPartyMember,
    t.remark,
    ts.name subjectName
  from	teacher t
  join teach_subject ts
    on t.teach_subject_id = ts.id
    and ts.is_removed = false
  where t.is_removed = false
`

const selectTeacherByIdSql = `
  select
    t.name,
    t.age,
    t.positional_titles,
    t.person_id,
    t.graduate_school,
    t.speciality,
    t.studies_time,
    t.work_start_time,
    t.sex,
    t.graduation_time,
    t.obtain_positional_titles_time,
    t.administrative_position,
    t.address,
    t.phone,
    t.sos_person,
    t.sos_person_phone,
    t.is_class_teacher,
    t.is_party_member,
    t.remark,
    ts.name
  from
    teacher t
  join teach_subject ts
    on ts.id = t.teach_subject_id
    and ts.is_removed = false
  where t.id = :id
    and t.is_removed = false
`

module.exports = {
  selectTeacherAllSql,
  selectTeacherByIdSql
}