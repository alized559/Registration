import React, { Component, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const Home = () => {

    const [userLogged, setUserLogged] = useState("");

    const history = useHistory();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const email = user.email;
            setUserLogged(email);
        }
    });

    const submit = () => {
        signOut(auth);
        history.push('/Login');
    };

    return(
        <div className="container">
            <div className="form-container">
                <form className="home" onSubmit={submit}>
                    <h2>Welcome {userLogged}</h2>
                    <div className="inputs">
                        <button type="submit">Logout</button>
                    </div>
                </form> 
            </div>
        </div>
    );
};

export default Home;