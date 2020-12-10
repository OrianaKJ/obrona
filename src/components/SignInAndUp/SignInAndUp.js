import React from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import './SignInAndUp.css';

const SignInAndUp = () => (
    <div className="signInUp">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndUp;