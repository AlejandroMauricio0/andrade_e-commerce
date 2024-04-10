import { Password } from '@mui/icons-material';
import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2'
import { Navigate } from 'react-router-dom';


function Login() {
    const form = useRef();
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    // estado para iniciar sesion 
    const [redirect, setRedirect] = useState(false);

    const [flagLogin, setFlagLogin] = useState(true);
    const [flag2, setFlag2] = useState(true);
    const [flag, setFlag] = useState(true);
    const [typeValor, setTypeValor] = useState('password');
    const [typeValor2, setTypeValor2] = useState('password');
    const [typeValorLogin, setTypeValorLogin] = useState('password');
    const [isMobile, setIsMobile] = useState(false);
    const [data, setData] = useState({ full_name: '', phone_number: '', email: '', password_login_second: '', password_login: '', });

    var res = 200;

    const handleChange = e => {
        setData({
            ...data, [e.target.name]: e.target.value,
        });
    };


    const loginUser = async (credentials) => {
        try {

            var response = await fetch('http://192.168.1.121:3003/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            })

            const data = await response.json();

            if (data.status === 200) {
                form.current.reset();
                setData([]);
                setRedirect(true);
                localStorage.setItem('token', data.data.token);
                // colocar el  token en localstorage para que se mantenga la sesion abierta
            }
        } catch (error) {
            Swal.fire({
                icon: "Error",
                title: "El inicio de sesion ha fallado",
                text: "Intentalo de nuevo",
            });
        }

    }

    const registerUser = async () => {
        try {
            const response = await fetch('http://192.168.1.116:3002/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify(user)
                body: JSON.stringify({
                    'name': data.full_name,
                    'email': data.email,
                    'phone_number': data.phone_number,
                    'password': data.password_login
                })
            });

            // console.log(response);

            const data = await response.json();

            if (data.status === 201) {
                Swal.fire({
                    icon: "Success",
                    title: "Operación completada con éxito",
                    text: "La cuenta ha sido creada exitosamente",
                    footer: 'Por favor, confirme su correo antes de continuar'
                });
                form.current.reset();
                setData([]);

            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Operación fallida",
                text: "La cuenta no pudó ser creada o ya existe",
                // footer: 'Por favor, confirme su correo antes de continuar'
            });
        }
    }



    const showPassword = () => {
        if (typeValor == 'password') {
            setTypeValor('text');
            setFlag(!flag)
        } else {
            setTypeValor('password');
            setFlag(!flag)
        }

    }

    const showPasswordLogin = () => {

        if (typeValorLogin == 'password') {
            setTypeValorLogin('text');
            setFlagLogin(!flagLogin)
        } else {
            setFlagLogin(!flagLogin)
            setTypeValorLogin('password');
        }

    }
    const showPassword2 = () => {

        if (typeValor2 == 'password') {
            setTypeValor2('text');
            setFlag2(!flag2)
        } else {
            setTypeValor2('password');
            setFlag2(!flag2)
        }

    }

    const handleSignUpClick = () => {
        setIsSignUpActive(true);
    };

    const handleSignInClick = () => {
        setIsSignUpActive(false);
    };





    const validatePasswor = (value) => {
        console.log('enter');
        if (value == 'register') {
            if (data.full_name == '', data.email == '', data.password_login == '', data.password_login_second == '', data.phone_number == '') {
                Swal.fire({
                    icon: "error",
                    title: "Operación fallida",
                    text: "Algunos campos se encuetran vacios, completalos",
                    // footer: 'Por favor, confirme su correo antes de continuar'
                });
            } else {
                if (data.password_login === data.password_login_second) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Espere un momento"
                    });
                    registerUser();
                } else {
                    console.log('contras incorrectas');
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "La contraseña no coinciden",
                    });

                }
            }
        } else if (value == 'login') {
            if (data.email == '', data.password_login == '') {
                console.log('contras incorrectas');
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Algunos de los campos se encuentran vacios, completalos",
                });

            } else {
                loginUser();
            }
        }
    }


    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 500);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            {
                localStorage.getItem('section_token') || redirect || res == 200  ?
                    <Navigate to='../user/dashboard' />
                    :
                    <div className='body'>
                        <div className={`container-login ${isSignUpActive ? 'right-panel-active' : ''} `} id="container-login">
                            {/* <div className="form-container-login  sign-up-container-login "> */}
                            <div className={`form-container-login ${isMobile ? 'container-fluid' : 'sign-up-container-login'}`}>

                                <form className='form-login width-' ref={form}>
                                    <h2>Create Account</h2>
                                    <input value={data.full_name} name='full_name' className='inputForm mt-1 width-100' type="text" placeholder="Nombre completo" onChange={handleChange} required />
                                    <input value={data.phone_number} name='phone_number' className='inputForm mt-1 width-100' type="" placeholder="Numero de telefono" onChange={handleChange} required />
                                    <input value={data.email} name='email' className='inputForm mt-1 width-100' type="email" placeholder="Email" onChange={handleChange} required />

                                    <div class="inputForm mt-1">
                                        {/* <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg> */}
                                        <input type={typeValor} class="input" placeholder="Introduce tú contraseña" />
                                        <a onClick={() => showPassword()} className='p-3'>
                                            {flag ? <i class="fa-regular fa-eye "></i> : <i class="fa-regular fa-eye-slash"></i>}
                                        </a>
                                    </div>
                                    <div class="inputForm mt-1 mb-1">
                                        {/* <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg> */}
                                        <input type={typeValor2} class="input" placeholder="Confirma tú contraseña" />
                                        <a onClick={() => showPassword2()} className='p-3'>
                                            {flag2 ? <i class="fa-regular fa-eye "></i> : <i class="fa-regular fa-eye-slash"></i>}
                                        </a>
                                    </div>

                                    {/* <div className='width-100 ms-auto'>
                            <input className='inputForm mt-1 width-70 ' type={typeValor} placeholder="Password" onChange={handleChange} name='password_login' required />
                            <a onClick={() => showPassword()} className='p-3'>
                                {flag ? <i class="fa-regular fa-eye "></i> : <i class="fa-regular fa-eye-slash"></i>}
                            </a>
                        </div>
                        <div className='width-100 ms-auto'>
                            <input className='inputForm mt-1 width-82 ' type={typeValor2} placeholder="Password" onChange={handleChange} name='password_login_second' required />
                            <a onClick={() => showPassword2()} className='p-3'>
                                {flag2 ? <i class="fa-regular fa-eye "></i> : <i class="fa-regular fa-eye-slash"></i>}
                            </a>

                        </div> */}

                                    <button type='button' className='button-login' onClick={() => validatePasswor('register')}> Registrarse</button>

                                    <p className='size-12'>¿Tienes una cuenta?
                                        <a className="color-blue" onClick={handleSignInClick}> Inicia sesion</a>
                                    </p>
                                </form>

                            </div>
                            <div className="form-container-login  sign-in-container-login">
                                <form className="form-login ">
                                    <h1 className='pb-1'>Inicia sesion</h1>
                                    {/* <span className='p-2'>Use your account</span> */}
                                    <input name='email' className='inputForm width-100' type="email" placeholder="Email" onChange={handleChange} required />
                                    <br />
                                    {/* <div class="password-wrapper">
                            <input id="password-field" type="password" class="input" name="password" />
                            <div class="icon-wrapper ">
                                <span toggle="#password-field" class="ion ion-eye field-icon toggle-password center"></span>
                            </div>

                        </div> */}



                                    <div class="inputForm">
                                        {/* <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg> */}
                                        <input type={typeValorLogin} class="input" name='password_login' onChange={handleChange} placeholder="Ingresa tú contraseña" />
                                        <a onClick={() => showPasswordLogin()} className='p-3'>
                                            {flagLogin ? <i class="fa-regular fa-eye "></i> : <i class="fa-regular fa-eye-slash"></i>}
                                        </a>
                                    </div>


                                    {/* <div className='width'>
                            <input className='inputForm mt-1 button-width ' type={typeValorLogin} placeholder="Password-login" onChange={handleChange} name='passwor-login' required />
                            <a onClick={() => showPasswordLogin()} className='p-3'>
                                {flagLogin ? <i class="fa-regular fa-eye "></i> : <i class="fa-regular fa-eye-slash"></i>}
                            </a>

                        </div> */}
                                    <div className='pt-3'>
                                        <button type='button' className=' button-login' onClick={() => validatePasswor('login')}>Sign in</button>
                                    </div>
                                    <br />
                                    <p className='size-12'>¿No tienes una cuenta?
                                        <a className="color-blue" onClick={handleSignUpClick}> Crear cuenta</a>
                                    </p>
                                </form>
                            </div>
                            <div className="overlay-container-login">
                                <div className="overlay">
                                    <div className="overlay-panel overlay-left">
                                        <h1>¡Bienvenido!</h1>
                                        <p className='topic'>Máquinas que impulsan el futuro, refacciones que aseguran el rendimiento.</p>
                                    </div>
                                    <div className="overlay-panel overlay-right">
                                        <h1>¡Hola de nuevo!</h1>
                                        <p className='topic'>Máquinas que impulsan el futuro, refacciones que aseguran el rendimiento.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};



export default Login;