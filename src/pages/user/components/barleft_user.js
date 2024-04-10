import { Link, Outlet } from 'react-router-dom';
// import '../../../assets/styles/navbar_left';


const BarLeftUser = () => {

    return (
        <div className='my-custom '>
            <nav id="navbar-custom">
                <ul class="navbar-custom-items flexbox-col my-custom-ul">

                    <li class="navbar-custom-item flexbox-left">
                        <a class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                <div className='bg-yellow rounded-circle center overfl ow-hidden' style={{ width: '50px', height: '50px' }}>
                                    <div className='color-white size-20'>
                                        MM
                                    </div>
                                </div>
                            </div>
                            <span class="link-text text-ligh ps-2">
                                Mauricio Alejandro Ocampo Lopez
                            </span>
                        </a>
                    </li>

                    <li class="navbar-custom-item flexbox-left">
                        <Link to={'profile'} class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                <span class="material-symbols-outlined color-DCDCDC">
                                    account_circle
                                </span>
                            </div>
                            <span class="link-text text-ligh">Mi perfil</span>
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
                        <Link to={'../payment'} class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                <i class="fa-regular fa-credit-card color-DCDCDC"></i>
                            </div>
                            <span class="link-text text-ligh">Tarjetas</span>
                        </Link>
                    </li>
                    <li class="navbar-custom-item flexbox-left">
                        <Link to={'location'} class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                <span class="material-symbols-outlined color-DCDCDC">
                                    location_on
                                </span>
                            </div>
                            <span class="link-text text-ligh">Direcciones</span>
                        </Link>
                    </li>
                    <li class="navbar-custom-item flexbox-left">
                        <Link to={'../../cart'} class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                <span class="material-symbols-outlined color-DCDCDC ">
                                    shopping_cart
                                </span>
                            </div>
                            <span class="link-text text-ligh">Mi carrito</span>
                        </Link>
                    </li>


                    <li class="navbar-custom-item flexbox-left">
                        <Link to={'history'} class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                <span class="material-symbols-outlined color-DCDCDC ">
                                    history
                                </span>
                            </div>
                            <span class="link-text text-ligh ">Historial de compras</span>
                        </Link>
                    </li>

                    <li class="navbar-custom-item flexbox-left">
                        <Link to={'state_product'} class="navbar-custom-item-inner flexbox-left">
                            <div class="navbar-custom-item-inner-icon-wrapper flexbox">
                                <i class="fa-solid fa-arrow-right-from-bracket color-red"></i>
                            </div>
                            <span class="link-text text-ligh">Cerrar sesion</span>
                        </Link>
                    </li>
                </ul>
            </nav>


            <main id="main" class="flexbox-co ">
                <Outlet />
            </main>
        </div>
    );
}
export default BarLeftUser