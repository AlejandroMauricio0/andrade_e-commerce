import { Link } from 'react-router-dom';
import logo from '../../../assets/images/ANDRADE_MKTPLAN_BRANDING-02.png'

function NavbarAdmin() {
    return (
        <nav class="navbar navbar-dark bg-blue fixed-top">
            <div class="container-fluid">
                {/* <a class="navbar-brand" href="#">Offcanvas dark </a> */}
                <a href="../../dashboard" >
                    <img src={logo} className='logo pr-2' alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menú</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <Link to={'../storage/get_all_items'} class="nav-link active text-start" aria-current="page" href="#">Todos los productos</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'../storage/add_items'} class="nav-link active text-start" aria-current="page" href="#">Agregar productos</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'../storage/products/update'} class="nav-link text-start" href="#">Actualizar productos</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'../storage/products/state'} class="nav-link text-start text-primary" href="#">Activar / Desactivar Producto</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={'../storage/products/delete_product'} class="nav-link text-start text-danger" href="#">Eliminar productos</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={''} class="nav-link text-start text-warning" href="#">Historial de compras</Link>
                            </li>

                        </ul>
                        <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavbarAdmin;