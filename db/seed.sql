drop table if exists carna_user;

create table carna_user(id serial primary key, 
is_admin boolean default false,
username varchar(20), 
email varchar(150), 
password varchar(50), 
profile_picture text);

create table student();

create table teacher();

create table admin();

create table reports(reports_id serial primary key,
user_id int references carna_user(id), );

create table questions(question_id serial primary key,
);

create table onboarding(id serial primary key, 
user_id int references carna_user(id),
question varchar(1000),
answer varchar(1000),
response varchar references answer);