import { useState, useEffect } from 'react';

// React router
import { Link, useActionData, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
// import images
import logo from '../assets/images/ANDRADE_MKTPLAN_BRANDING-02.png'
import { get } from 'jquery';

function NavBar({ myCart }) {



    const keywords = [
        "CNC",
        "Siemens",
        "Heidenhain",
        "Wieland",
        "EATON",
        "Schneider Electric",
        "OMRON",
        "Yaskawa Electric",
    ]

    // state
    const [activate, setActivate] = useState(true);
    const [randomNumber, setRandomNumber] = useState(0);
    const [product, setProduct] = useState({ producto: '' });

    const location = useLocation();
    let text = location.pathname;
    const myArray = text.split("/");
    const navigate = useNavigate();


    const searchProduct = () => {

        if (product.producto == '' || product.producto === 'undefined') {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "El campo no debe estar vacio"
            });
        } else {
            navigate("../search?=" + product.producto);
            // obtiene los productos

            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Busqueda Realizada"
            });
        }
    }

    // funciones
    const hiddenNavbar = () => {
        // let token = localStorage.getItem('token')
        if (myArray[1] === "login") {
            setActivate(false);
            // setUserPro   file(jwt_decode(token))
        } else {
            setActivate(true);
        }
    }
    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 8); // Genera un número aleatorio entre 0 y 99
        setRandomNumber(newRandomNumber);
    };




    // cambio de estado "producto a buscar"
    const handleChange = e => {
        setProduct({
            ...product, [e.target.name]: e.target.value,
        });
    };

    const KeyDown = (event) => {
        if (event.key === 'Enter') {
            // Aquí puedes llamar a la función que realiza la búsqueda o realizar la acción que necesitas
            searchProduct();
        }
    };

    
    

    useEffect(() => {

        hiddenNavbar();
    }, [1])


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-blue border-bottom border-body p-3" data-bs-theme="ligth">

                <div className="container-fluid bg-re text-center center">

                    {activate ? <>
                        <div className="bg-w hite col-md-auto heigth-100 center">
                            <a href="../dashboard" onClick={() => hiddenNavbar()}>
                                <img src={logo} className='logo pr-2' alt="" />
                            </a>
                        </div>

                        <div className="color-white col-6 ">
                            <div className="input-group">
                                <input type="text" className="form-control color-black" placeholder={keywords[randomNumber]}
                                    aria-label="Recipient's username" aria-describedby="button-addon2" name="producto" onChange={handleChange} onKeyDown={KeyDown} />
                                <button className="btn btn-warning" type="button" id="button-addon2" onClick={() => searchProduct()} >
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>


                        <div className="color-white col col-lg-2">
                            <div className='center'>
                                <div>
                                    <div className='input-group'>
                                        <a href='../login'>
                                            <span className="material-symbols-outlined size-40 color-white pr-2" onClick={() => hiddenNavbar()}>account_circle</span>
                                        </a>
                                        <div className='border-left pr-2 ' />
                                        <Link to='../cart'>
                                            {/* <span className="fa-solid fa-cart-shopping size-30 color-white pt-2" onClick={() => hiddenNavbar()}></span> */}

                                            <a className=" bg-blue position-relative ">
                                                {/* Inbox */}
                                                <span className="material-symbols-outlined size-40 color-white pr-2">
                                                    shopping_cart
                                                </span>
                                                <span className="position-absolute top-50 start-50 translate-middle badge rounded-pill bg-danger">
                                                    {myCart.length}
                                                    <span className="visually-hidden">unread messages</span>
                                                </span>
                                            </a>
                                        </Link>
                                        {/* <Link to="#"><span className="fa-solid fa-cart-shopping size-30 color-white"></span></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> :

                        <div className='width-100'>
                            <div className="col-md-auto heigth-100 center">
                                <a href="../dashboard" onClick={() => hiddenNavbar()}>
                                    <img src={logo} className='logo pr-2' alt="" />
                                </a>
                            </div>
                        </div>
                    }
                </div>
            </nav>
        </>
    );
}

export default NavBar;