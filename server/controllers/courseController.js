module.exports = {
    createCourse: async(req, res) => {
        const {id} = req.params,
              {courseName} = req.body,
              db = req.app.get('db');

        let project = await db.course.create_course({courseName}),
            {course_id} = course[0];

        db.course.user_course_join({id, course_id})
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    },
    getCourses: (req, res) => {
        const {id} = req.params,
              db = req.app.get('db');

        db.course.get_courses(+id)
        .then(courses => res.status(200).send(courses))
        .catch(err => res.status(500).send(err));
    }
}