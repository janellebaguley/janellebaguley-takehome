create table carna_user(user_id serial primary key, username varchar(20), 
email varchar(150), 
password varchar(50), 
profile_picture text);

create table reports(reports_id serial primary key,
user_id int references carna_user(user_id), );

create table questions(question_id serial primary key,
);