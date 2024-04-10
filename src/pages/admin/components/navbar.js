import { Link } from 'react-router-dom';
import logo from '../../../assets/images/ANDRADE_MKTPLAN_BRANDING-02.png'
import Notify from './notificaciones';

function NavbarAdmin() {
    return (
        <>


            <div className="container-fluid pt-5 heigth-100-vh width-100 bg-ededede" >
                <nav class="navbar bg-body-tertiary container rounded" style={{ position: "inherit" }}>
                    <h5 className='ps-2'>
                        Notificaciones de venta
                    </h5>
                    {/* <div class="d-flex container justify-content-end">
                        <form class="d-flex bg- red" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div> */}
                </nav>
                <div className="container mt-5  overflow-hidden overflow-scroll" style={{ position: "inherit" }}>

                    <div className='heigth-80-vh' style={{ position: "inherit" }}>
                        <Notify />
                        <Notify />
                        <Notify />
                        {/* <Notify />
                        <Notify />
                        <Notify />
                        <Notify />
                        <Notify />
                        <Notify />
                        <Notify />
                        <Notify /> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarAdmin;