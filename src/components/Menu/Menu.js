import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers, faCommentAlt, faTasks, faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
library.add(faUsers, faCommentAlt, faTasks, faCalendarAlt)

const Menu = () => {
    return(
        <section>
            {/* <Img src={logo} alt='logo'/> */}
            <Link to='/teams' className='menu-links'>
                {/* <FontAwesomeIcon icon='users' className='icons'/> */}
                <p>Class</p>
            </Link>
            <Link to='/messages' className='menu-links'>
                {/* <FontAwesomeIcon icon='comment-alt' className='icons'/> */}
                <p>Messages</p>
            </Link>
            <Link to='/tasks' className='menu-links'>
                {/* <FontAwesomeIcon icon='tasks' className='icons'/> */}
                <p>Courses</p>
            </Link>
            <Link to='/schedule' className='menu-links'>
                {/* <FontAwesomeIcon icon='calendar-alt' className='icons'/> */}
                <p>Schedule</p>
            </Link>
        </section>
    )
}

export default Menu;