require('dotenv').config();
const express = require('express'),
      authCtrl = require('./controllers/authController'),
      courseCtrl = require('./controllers/courseController'),
      massive = require('massive'),
      session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

const app = express();

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then((db) => {
    app.set('db', db)
    console.log('db connected')
})

//Auth endpoints
app.post('/api/register', authCtrl.register)
app.post('/api/login', authCtrl.login)
app.get('/api/logout', authCtrl.logout)

//Course endpoints
app.get('/api/courses/:id', courseCtrl.getCourses)
app.post('/api/course/:id', courseCtrl.createCourse)


app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`));