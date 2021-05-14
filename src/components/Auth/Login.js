import React, {useState} from 'react'
import axios from 'axios'
// import {AuthContainer, Img, H1, P, Input, Button} from './AuthenticationStyles'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = () => {
        axios.post('/auth/login', {email, password})
        .then(res => props.history.push('/course'))
    }

    return(
        <section>
            {/* <Img src={logo} alt='logo'/> */}
            <h1>Sign in</h1>
            <p>Sign in to start managing your course!</p>
            <div>
                <input
                    value={email} 
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                <input
                    type='password'
                    value={password} 
                    placeholder='Password'
                    onChange={e => setPassword(e.target.value)}/>
            </div>
            <button onClick={loginUser}>Login</button>
        </section>
    )
}

export default Login;