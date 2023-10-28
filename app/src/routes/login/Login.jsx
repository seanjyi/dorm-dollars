import React from 'react';
import { useState } from 'react'
import authenticate from '../../api/connector';


const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        authenticate({username: username, password: password}, props.setLoggedIn, props.userData, props.setUserData)
    };

    return(
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
    )
}

export default Login;