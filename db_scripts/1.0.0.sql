create table Teacher(
  id int not null auto_increment primary key,
  name varchar(10) not null comment '姓名',   
  sex char(1) not null comment '性别',
  age tinyint(100) not null comment '年龄',
  primary key (id)
)comment = '学生表';