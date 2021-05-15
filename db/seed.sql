drop table if exists carna_user;

create table carna_user(user_id serial primary key, 
is_admin boolean default false,
username varchar(20), 
email varchar(150), 
password varchar(50), 
profile_picture text);

create table if not exists course (
    course_id serial primary key,
    course_name varchar(30) not null
);

create table if not exists user_course_join (
    join_id serial primary key,
    user_id int references carna_user(user_id),
    course_id int references course(course_id)
);