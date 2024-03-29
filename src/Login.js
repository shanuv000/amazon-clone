import React, {useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from "./firebase";

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = e => {
        e.preventDefault(); //This Prevent You to Refreshing your page
//Do some firebase fancy Login
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            }).catch(error => {
            alert(error.message)
        })
    };


    const register = e => {
        e.preventDefault();                                      //This Prevent You to Refreshing your page
        //Do some firebase fancy Register
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //It successfully Created a New email and Password.
                if (auth) {
                    history.push('/');
                }

            }).catch(error => alert(error.message));

    };
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo'
                     src="data:image/png;base64,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"
                     alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button onClick={signIn}
                            className='login__signInButton'>Sign In
                    </button>
                </form>
                <p>By continuing, you agree to the Amazon Fake Clone's Conditions of Use and Privacy Notice.</p>
                <button onClick={register}
                        className='login__registerButton'>Create Your Amazon Account
                </button>
            </div>
        </div>
    )
}
export default Login;