select c.course_id, c.course_name from course c
join user_course_join up on c.course_id = uc.course_id
where uc.user_id = $1;