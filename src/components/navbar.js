import logo from '../assets/images/ANDRADE_MKTPLAN_BRANDING-02.png'


function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-blue border-bottom border-body p-3" data-bs-theme="ligth">

                <div className="container-fluid text-center center">
                    <div className="color-white col-md-auto ">
                        <img src={logo} className='logo pr-2' alt="" />
                    </div>
                    <div className="color-white col-6">
                        <div className="input-group ">
                            <input type="text" className="form-control color-black " placeholder="Recipient's username"
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
                                    <span className="material-symbols-outlined size-40 color-white pr-2">account_circle</span>
                                    <div className='border-left pr-2 ' />
                                    {/* <a href=""><i className="fa-solid fa-cart-shopping size-30 color-white"></i></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;