create table Teacher(
  id                                int                                       not null      AUTO_INCREMENT   	primary key   		comment '主键Id',
  name                              text(20)                                  not null                                					comment '姓名',   
  age                               tinyint(100)                              not null      default '0'                         comment '年龄',
  positional_titles                 ENUM('primary','intermediate','senior')   null          default 'PRIMARY'                   comment '职称 枚举值(初级|中级|高级)',
  person_id                         char(20)                                  not null                                          comment '身份证号码',
  graduate_school                   char(20)                                  not null                                          comment '毕业院校',
  speciality                        char(20)                                  not null                                          comment '专业',
  studies_time                      date                                      null                                              comment '进修时间',
  work_start_time                   date                                      not null      default '1000-10-10 10:10:10'       comment '工作时间',
  sex                               ENUM('male','female')                     not null      default 'male'                      comment '性别',
  graduation_time                   date                                      not null      default '1000-10-10 10:10:10'       comment '毕业时间',
  obtain_positional_titles_time     date                                      null                                              comment '获取职称时间',
  administrative_position           char(20)                                  null                                              comment '行政职务',
  address                           char(50)                                  not null                                          comment '联系地址',
  phone                             bigint(11)                                not null                               						comment '联系电话',
  sos_person                        char(10)                                  null                                              comment '紧急联络人',
  sos_person_phone                  bigint(11)                                null          						                        comment '紧急联络人电话',
  is_class_teacher                  boolean      				                      not null      default false                       comment '是否班主任',
  teach_subject_id                  int                                       not null                                          comment '所任学科Id',
  is_party_member                   boolean      				                      not null      default false                       comment '是否党员',
  remark                            text                                      null          							                      comment '备注',
  is_removed                        boolean      				                      not null      default false                       comment '删除标记'       
) comment = '教师表';

create table teach_subject(
  id                                int                                       not null      AUTO_INCREMENT   	primary key   		comment '主键Id',
  name                              text(20)                                  not null                                          comment '学科名称',
  remark                            text                                      null          							                      comment '备注',
  is_removed                        boolean      				                      not null      default false                       comment '删除标记'
) comment = '学科表';

create table teacher_attachment(
  id                                int                                       not null      AUTO_INCREMENT   	primary key   		comment '主键Id',
  teacher_id                        int                                       not null                                          comment 'teacher表id',
  name                              text(20)                                  not null                                          comment '名称',
  size                              text(20)                                  not null                                          comment '大小',
  upload_time                       TIMESTAMP                                 not null                                          comment '上传时间',
  remark                            text                                      null                                              comment '备注',
  is_removed                        boolean                                   not null      default false                       comment '删除标记'
) comment = '教师附件表';

alter table teacher_attachment add column attachment_key text(50);
alter table teacher_attachment modify name text(50);

create table user(
  id                                int                                       not null      AUTO_INCREMENT   	primary key   		comment '主键Id',
  account                           varchar(20)                               not null      UNIQUE                              comment '账号名',
  password                          varchar(20)                               not null                                          comment '密码',
  remark                            text                                      null                                              comment '备注',
  is_removed                        boolean                                   not null      default false                       comment '删除标记'
) comment = '用户表';

create table students(
  id                                int                                       not null      AUTO_INCREMENT   	primary key   		comment '主键Id',
  student_no                        char(20)                                  not null      UNIQUE                              comment '学号',
  name                              char(20)                                  not null                                          comment '名称',
  birthday                          date                                      not null                                          comment '出生日期',
  nation                            char(20)                                  not null                                          comment '民族',
  sex                               ENUM('male','female')                     not null      default 'male'                      comment '性别',
  contact_phone                     bigint(11)                                not null                                          comment '联系电话',
  contacts                          char(20)                                  not null                                          comment '联系人',
  remark                            varchar(50)                               null                                              comment '备注',
  is_removed                        boolean                                   not null      default false                       comment '删除标记'
) comment = '学生表';

create table students_attachment(
  id                                int                                       not null      AUTO_INCREMENT   	primary key   		comment '主键Id',
  student_id                        int                                       not null                                          comment 'teacher表id',
  name                              text(20)                                  not null                                          comment '名称',
  size                              text(20)                                  not null                                          comment '大小',
  upload_time                       TIMESTAMP                                 not null                                          comment '上传时间',
  remark                            text                                      null                                              comment '备注',
  is_removed                        boolean                                   not null      default false                       comment '删除标记'                       
) comment = '学生附件表';

create table students_achievement(                                                                                               
  id                                int                                       not null      AUTO_INCREMENT   	primary key   		comment '主键Id',
  student_id                        int                                       not null                                          comment 'teacher表id',
  subject_id                        int                                       not null                                          comment 'teach_subject表id',
  test_scores                       int                                       not null                                          comment '考试成绩',
  grade                             int                                       not null                                          comment '年级',
  semester                          enum('1','2')                             not null      default '1'                         comment '学期',
  is_test                           boolean                                   not null      default false                       comment '是否是测试成绩',
  remark                            text                                      null                                              comment '备注',
  is_removed                        boolean                                   not null      default false                       comment '删除标记'          
) comment = '学生成绩表';

create table address(
  id                                int                                       not null      AUTO_INCREMENT   	primary key   		comment '主键Id',
  relation_id                       int                                       not null                                          comment '关联Id(teacher表主键Id/students表主键Id)',
  type                              enum('student','teacher')                 not null                                          comment '类型(教师/学生)',
  habitation_type                   enum('habitation','HouseholdRegister')    not null                                          comment '地址类型(居住地/户籍)',
  province                          char(20)                                  not null                                          comment '省',
  city                              char(20)                                  not null                                          comment '市',
  district                          char(20)                                  not null                                          comment '区',
  detailed_address                  varchar(50)                               not null                                          comment '详细地址',                
  remark                            varchar(50)                               null                                              comment '备注',
  is_removed                        boolean                                   not null      default false                       comment '删除标记'                      
) comment = '联系地址表';

CREATE TABLE IF NOT EXISTS area(
  id                                int(20)                                   not null      AUTO_INCREMENT    primary key       comment '地区Id/主键Id',
  area_code                         varchar(50)                               not null                                          comment '地区编码',
  area_name                         varchar(20)                               not null                                          comment '地区名',
  level                             tinyint(4)                                not null      DEFAULT '-1'                        comment '地区级别(1:省份province,2:市city,3:区县district,4:街道street)',
  city_code                         varchar(50)                               null          DEFAULT NULL                        comment '城市编码',
  center                            varchar(50)                               null          DEFAULT NULL                        comment '城市中心点(即：经纬度坐标)',
  parent_id                         int(20)                                   not null      DEFAULT '-1'                        comment '地区父节点'
) comment='地区码表';