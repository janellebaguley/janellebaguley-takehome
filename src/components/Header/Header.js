import React from 'react'
import './Header.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
library.add(faChevronDown)

const Header = () => {
    return(
        <section>
            <span>Welcome, User</span>
            <span>My account</span>
            <FontAwesomeIcon icon='chevron-down' className='icon'/>
        </section>
    )
}

export default Header;