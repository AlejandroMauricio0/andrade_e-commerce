import { Link, Outlet } from 'react-router-dom';
// import '../../../assets/styles/navbar_left';


const NavBarleft = () => {

    return (
        <div className='my-custom '>
            <nav id="navbar-custom">
                <ul class="navbar-custom-items flexbox-col my-custom-ul">
                    <li class="navbar-custom-logo flexbox-left">
                        <a class="navbar-custom-item-inner flexbox">

                            <svg width="50" height="22" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3932 0.190753H9.78921L0.602539 21.3228H6.20521L15.3932 0.190753Z" fill="#FBC508" />
                                <path d="M22.7432 0.190753H17.1365L7.95117 21.3228H13.5565L22.7432 0.190753Z" fill="#FBC508" />
                                <path d="M30.0947 0.190753H24.4881L15.3027 21.3228H20.9067L30.0947 0.190753Z" fill="#FBC508" />
                            </svg>

                        </a>
                    </li>
                    <li class="navbar-custom-item flexbox-left">
                        <Link to={'all_products'} class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                <span class="material-symbols-outlined color-white">
                                    visibility
                                </span>
                            </div>
                            <span class="link-text text-ligh">Todos los productos</span>
                        </Link>
                    </li>
                    <li class="navbar-custom-item flexbox-left">
                        <Link to={'notify'} class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                {/* <i class="fa-solid fa-magnifying-glass color-white"></i> */}
                                <a className=" bg-blue position-relative ">
                                    {/* Inbox */}
                                    <i class="fa-regular fa-bell size-24 color-white"></i>
                                    {/* <span className="material-symbols-outlined size-40 color-white pr-2">
                                        shopping_cart
                                    </span> */}
                                    <span className="position-absolute top-100 start-100 rounded-circle translate-middle badge rounded-pill bg-danger">
                                        0
                                        <span className="visually-hidden">Notificaciones</span>
                                    </span>
                                </a>
                            </div>
                            <span class="link-text text-ligh">Notificaciones</span>
                        </Link>
                    </li>
                    {/* <li class="nav bar-custom-item flexbox-left">
                        <a class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                <i class="fa-solid fa-house color-white"></i>
                            </div>
                            <span class="link-text text-ligh">Home</span>
                        </a>
                    </li> */}
                    <li class="navbar-custom-item flexbox-left">
                        <Link to={'add_product'} class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                <span class="material-symbols-outlined color-white">
                                    add_box
                                </span>
                            </div>
                            <span class="link-text text-ligh">Agregar producto</span>
                        </Link>
                    </li>
                    {/* <li class="navbar-custom-item flexbox-left">
                        <a class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                <i class="fa-solid fa-pen-to-square color-6f42c1"></i>
                            </div>
                            <span class="link-text text-ligh">Editar</span>
                        </a>
                    </li> */}
                    <li class="navbar-custom-item flexbox-left">
                        <Link to={'update_producto'} class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                <span class="material-symbols-outlined color-blue-original">upgrade</span>
                            </div>
                            <span class="link-text text-ligh">Actualizar</span>
                        </Link>
                    </li>
                    <li class="navbar-custom-item flexbox-left">
                        <Link to={'delete_product'} class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                <i class="fa-solid fa-trash color-red"></i>
                            </div>
                            <span class="link-text text-ligh">Eliminar</span>
                        </Link>
                    </li>
                    <li class="navbar-custom-item flexbox-left">
                        <Link to={'state_product'} class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                <i class="fa-solid fa-power-off color-green-red"></i>
                            </div>
                            <span class="link-text text-ligh">Activar/Desactivar</span>
                        </Link>
                    </li>


                    <li class="navbar-custom-item flexbox-left">
                        <Link to={'sales_history'} class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                <span class="material-symbols-outlined color-8B4513 ">
                                    history
                                </span>
                            </div>
                            <span class="link-text text-ligh">Historial de ventas</span>
                        </Link>
                    </li>
                </ul>
            </nav>


            <main id="main" class="flexbox-col ">
                <Outlet />
            </main>
        </div>
    );
}
export default NavBarleft