create table Teacher(
  id                        int                 not null      comment '主键Id',
  name                      varchar(10)         not null      comment '姓名',   
  age                       tinyint(100)        not null      comment '年龄',
  sex                       char(1)             not null      comment '性别',
  positional_titles         char(10)            null          comment '职称',
  person_id                 char(18)            not null      comment '身份证号码',
  graduate_school           char(50)            not null      comment '毕业院校',
  speciality                char(50)            not null      comment '专业',
  studies_time              date                null          comment '进修时间',
  work_start_time           date                not null      comment '工作时间',
  
  primary key (id)
) comment = '学生表';