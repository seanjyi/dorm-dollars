import React from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { authenticate } from '../../api/connector';
import './login.css'

const Login = (props) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        if (authenticated) {
            navigate('/')
        }
    }, [authenticated])
    
    const onSubmit = (e) => {
        e.preventDefault();
        try {
            authenticate({username: username, password: password}, props.setLoggedIn, props.userData, props.setUserData)
                .then(() => {
                    setAuthenticated(true)
                })
            setUsername('')
            setPassword('')
        } catch (error) {
            console.error(error)
        }
    };

    return(
        <div id='login'>
            <div>
                <h2>Login Form</h2>
                <form onSubmit={onSubmit}>
                    <label>Username</label>
                    <br />
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    
                    <br /><br />

                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <br /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;