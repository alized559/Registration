import React, { Component, useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {

    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");

    const history = useHistory();

    const submit = (event) => {
        if(!userEmail) {
            alert('Please enter your email');
            return;
        }
        else if (!userPassword) {
            alert('Please enter your password');
            return;
        }

        event.preventDefault();
        signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then(() => {
            history.push('/Home');
        })
        .catch((error) => {
            if (error.code === 'auth/user-not-found') {
                alert('Email incorrect');
            }

            if (error.code === 'auth/wrong-password') {
                alert('Password Incorrect');
            }
        });
    }

    return(
        <div className="container">
            <div className="form-container">
                <form className="form" onSubmit={submit}>
                    <div className="header">
                        <h1>Login</h1>
                    </div>
                
                    <div className="inputs">
                        <label>Email</label><br/>
                        <input
                            type='text'
                            onChange={(event) => setEmail(event.target.value)}
                            value={userEmail}
                        />
                    </div>

                    <div className="inputs">
                        <br/><label>Password</label><br/>
                        <input 
                            type='password'
                            onChange={(event) => setPassword(event.target.value)}
                            value={userPassword}
                        />
                    </div>

                    <div className="inputs">
                        <button type="submit">Login</button>
                    </div>

                    <div class="member">
                        <p>Not a member? <Link to={'/'}>SignUp</Link></p>
                    </div>
                </form>
            </div>
            
            <div className="done">
                <p>Done By Ali</p>
            </div>
        </div>
    );
};

export default Login;