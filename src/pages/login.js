import React, { useState } from 'react';
import Swal from 'sweetalert2'

function Login() {

    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [nameRegister, setNameRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [emailRegister, setEmailRegister] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleNameRegisterChange = (event) => {
        setNameRegister(event.target.value);
    };

    const handlePasswordRegisterChange = (event) => {
        setPasswordRegister(event.target.value);
    };

    const handleEmailRegisterChange = (event) => {
        setEmailRegister(event.target.value);
    };

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };



    async function loginUser(credentials) {
        return await fetch('http://192.168.1.121:3003/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        })
            .then(response => response.json())
            .then(result => {
                console.log('result: ', result.data.name)
                if (result.data === `Verifique su email\nSe ha enviado un código de verificación a ${credentials.email}`)
                    // console.log('Usuario no verificado')
                    Swal.fire("Por favor, confirme su correo antes de continuar");
                else
                    // console.log('Usuario verificado')
                    Swal.fire({
                        title: `Bienvenido de nuevo, ${result.data.name}`, timer: 1500
                    });
            })
            .catch(err => console.log(err))

    }

    async function registerUser(credentials) {
        console.log(credentials)
        return await fetch('http://192.168.1.121:3003/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify(user)
            body: JSON.stringify(credentials)
        })
            .then(response => response.json)
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }


    async function handleSubmit(event) {
        event.preventDefault();
        console.log('Printing...');
        const email = username;

        const response = await loginUser({
            email,
            password
        });

    }

    async function handleRegister() {
        const response = await registerUser({
            name: nameRegister,
            email: emailRegister,
            password: passwordRegister,
            phone_number: '9612140519'
        });
    }

    return (
        <div className='body'>
            <div className={`container-login ${isSignUpActive ? 'right-panel-active' : ''} `} id="container-login">
                <div className="form-container-login  sign-up-container-login">
                    <form className='form-login' onSubmit={handleRegister}>
                        <h1>Create Account</h1>
                        <span className='span-login'>or use your email for registration</span>
                        <input className='input-login' type="text" placeholder="Nombre completo" value={nameRegister} onChange={handleNameRegisterChange} required />
                        <input className='input-login' type="email" placeholder="Numero de telefono"     onChange={handleEmailRegisterChange} required />
                        <input className='input-login' type="email" placeholder="Email" value={emailRegister} onChange={handleEmailRegisterChange} required />
                        <input className='input-login' type="password" placeholder="Password" value={passwordRegister} onChange={handlePasswordRegisterChange} required />
                        <input className='input-login' type="password" placeholder="Password" value={passwordRegister} onChange={handlePasswordRegisterChange} required />
                        <button className='button-login'> Sign Up</button>

                        <p className='size-12'>You have an account?
                            <a className="color-blue" onClick={handleSignInClick}>  Click here</a>
                        </p>
                    </form>
                </div>
                <div className="form-container-login  sign-in-container-login">
                    <form className="form-login" onSubmit={handleSubmit}>
                        <h1>Sign in</h1>
                        <span>Use your account</span>
                        <input className='input-login' type="email" placeholder="Email" value={username} onChange={handleUsernameChange} required />
                        <input className='input-login' type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                        {/* <a href="#">Forgot your password?</a> */}
                        <button className='button-login'>Sign in</button>
                        <br />
                        <p className='size-12'>Don't have a account?
                            <a className="color-blue" onClick={handleSignUpClick}> Sign Up</a>
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