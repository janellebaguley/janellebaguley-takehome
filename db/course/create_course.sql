insert into course (
    course_name
) values (
    ${courseName}
)
returning course_id;