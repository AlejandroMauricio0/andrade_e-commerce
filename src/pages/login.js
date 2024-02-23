import React, { useState } from 'react';



function Login() {

    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };

    return (
        <div className='body'>
            <div className={`container-login ${isSignUpActive ? 'right-panel-active' : ''} `} id="container-login">
                <div className="form-container-login  sign-up-container-login">
                    <form className='form-login' action="#">
                        <h1>Create Account</h1>
                        <span className='span-login'>or use your email for registration</span>
                        <input className='input-login' type="text" placeholder="Name" />
                        <input className='input-login' type="email" placeholder="Email" />
                        <input className='input-login' type="password" placeholder="Password" />
                        <button className='button-login'>Sign Up</button>

                        {/* <a className="ghost button-login" onClick={handleSignInClick}>Sign In</a> */}

                        <p className='size-12'>You have an account?
                            <a className="color-blue" onClick={handleSignInClick}>  Click here</a>
                        </p>
                    </form>
                </div>
                <div className  ="form-container-login  sign-in-container-login">
                    <form className="form-login " action="#">
                        <h1>Sign in</h1>
                        <span>Use your account</span>
                        <input className='input-login' type="email" placeholder="Email" />
                        <input className='input-login' type="password" placeholder="Password" />
                        {/* <a href="#">Forgot your password?</a> */}
                        <button className='button-login'>Sign In</button>
                        <br/>
                        <p className='size-12'>Dont have a login?
                            <a className="color-blue" onClick={handleSignUpClick}>Sign Up</a>
                        </p>
                    </form>
                </div>
                <div className="overlay-container-login">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>¡Welcome!</h1>
                            <p className='topic'>Máquinas que impulsan el futuro, refacciones que aseguran el rendimiento.</p>
                            {/* <button className="ghost button-login" onClick={handleSignInClick}>Sign In</button> */}
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello Again!</h1>
                            <p className='topic'>Máquinas que impulsan el futuro, refacciones que aseguran el rendimiento.</p>
                            {/* <button className="ghost  button-login" onClick={handleSignUpClick}>Sign Up</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Login;
