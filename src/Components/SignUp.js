import React, { Component, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const SignUp = () => {
    const history = useHistory();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            history.push('/Home');
        }
    });

    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");

    const submit = (event) => {

        if (!userEmail) {
            alert('Please enter your email');
            return;
        }
        else if (!userPassword) {
            alert('Please enter your password');
            return;
        }
        else if (!userConfirmPassword) {
            alert('Please confirm your password');
        }
        else if (userConfirmPassword != userPassword) {
            alert('Confirm password incorrect');
        }

        event.preventDefault();
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then(() => {
            history.push('/Login');
        })
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email is already in use');
            }

            if (error.code === 'auth/invalid-email') {
                alert('Email Invalid');
            }

            if (error.code === 'auth/weak-password') {
                alert('Password must be long');
            }
        });
    };

    return(
        <div className="container">
            <div className="form-container">
                <form className="form" onSubmit={submit}>
                    <div className="header">
                        <h1>Register</h1>
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
                        <br/><label>Confirm Password</label><br/>
                        <input 
                            type='password'
                            onChange={(event) => setUserConfirmPassword(event.target.value)}
                            value={userConfirmPassword}
                        />
                    </div>

                    <div className="inputs">
                        <button type="submit">Register</button>
                    </div>

                    <div class="member">
                        <Link to={'/Login'}><p>Already have an account</p></Link>
                    </div>
                </form>
            </div>
            
            <div className="done">
                <p>Done By Ali</p>
            </div>
        </div>
    );
};

export default SignUp;