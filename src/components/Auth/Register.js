import React, {useState} from 'react'
import axios from 'axios'

const Register = (props) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verPassword, setVerPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const isAdminToggle = () => {
        setIsAdmin(!isAdmin)
    }

    const registerUser = () => {
        if(password === verPassword){
            axios.post('/auth/register', {username, email, password, isAdmin})
            .then(res => props.history.push('/tasks'))
        } else {
            alert(`Passwords don't match`)
        }
    }

    return(
        <section>
            <h1>Register</h1>
            <p>Create your account to start managing courses!</p>
            <div>
                <input
                    value={username} 
                    placeholder='UserName'
                    onChange={e => setUsername(e.target.value)}/>
            </div>
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
            <div>
                <input
                    type='password'
                    value={verPassword}
                    placeholder='Verify Password'
                    onChange={e => setVerPassword(e.target.value)}/>
            </div>
            <div>
                <checkbox 
                   type='checkbox'
                   onChange={isAdminToggle}/>
                <span>Register as an Admin</span>
            </div>
            <button onClick={registerUser}>Register</button>
        </section>
    )
}

export default Register;