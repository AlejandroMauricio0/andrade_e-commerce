function SubNavBar() {
    return (
        <>
            <div className="container-fluid ">
                <nav className="" data-bs-theme="ligth">
                    <div className="d-flex justify-content-center">
                        <div className="dropdown">
                            <button className="btn size-15 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Herramientas
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <button className="btn size-15 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Maquinaria
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <button className="btn size-15 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Refacciones
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className="dropdown-item" type="button">Action</button></li>
                                <li><button className="dropdown-item" type="button">Another action</button></li>
                                <li><button className="dropdown-item" type="button">Something else here</button></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default SubNavBar;