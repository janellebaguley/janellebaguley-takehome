import React, {Component} from 'react'
import {Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            course: [],
            user: ''
        }
    }

   getCourses = () => {
        axios.get(`/api/courses/${this.props.user.user_id}`)
            .then(res => course(res.data))
            .catch(err => console.log(err));
    }

render(){ 
    return (
        <div>
            <section>
                <h1>Hi {this.props.user.username}</h1>
                <p>Welcome back to your dashboard!</p>
                {course.length
                    ? (
                        <section className='project-flex'>
                            
                            {course.map((course, i) => (
                                <Link className='link-style' to={`/dashboard/course/${course.course_id}`} key={i}>
                                    <div className='project-links'>
                                        {course.course_name.charAt(0)}
                                    </div>
                                    <p>{course.course_name}</p>
                                </Link>
                            ))}
                        </section>
                    )
                    : (
                        <>
                            <p>You don't have any courses!</p>
                            
                        </>
                    )}
                
            </section>
        </div>
    )
  }
}

export default Dashboard;