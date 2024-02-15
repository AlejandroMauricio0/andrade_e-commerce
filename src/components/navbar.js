import { useState, useEffect } from 'react';

// React router
import { Link, useLocation, useNavigate } from 'react-router-dom';

// import images
import logo from '../assets/images/ANDRADE_MKTPLAN_BRANDING-02.png'



function NavBar() {

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


    const location = useLocation();
    let text = location.pathname;
    const myArray = text.split("/");
    const navigate = useNavigate();

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

    // useEffect(() => {
    //     const intervalId = setInterval(generateRandomNumber, 2000);

    //     // Limpia el intervalo cuando el componente se desmonta
    //     hiddenNavbar();
    //     return () => clearInterval(intervalId);
    // }, [])



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
                            <div className="input-group ">
                                <input type="text" className="form-control color-black " placeholder={keywords[randomNumber]}
                                    aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn bg-yellow btn-outline-light" type="button" id="button-addon2">
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
                                        <a href='../login'>
                                            {/* <span className="fa-solid fa-cart-shopping size-30 color-white pt-2" onClick={() => hiddenNavbar()}></span> */}
                                            <span className="material-symbols-outlined size-40 color-white pr-2">
                                                shopping_cart
                                            </span>
                                        </a>
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