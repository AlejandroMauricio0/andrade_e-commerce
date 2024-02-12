function Footer() {
    return (
        <>
            <div className="mt-2 mb-2 container bg-white">
                <div className="row row-cols-1 row-cols-md-3 g-4 ">
                    <div className="col">
                        <div className="card">

                            <span className="material-symbols-outlined size-64">
                                local_shipping
                            </span>
                            <b>Envios nacional e internacional</b>
                            <p> Recibe en tu negocio rápido y seguro.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <span className="material-symbols-outlined size-64">
                                verified_user
                            </span>
                            <b>Entrega segura</b>
                            <p>
                                Procesamos todas las
                                entregas de forma segura
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <span className="material-symbols-outlined size-64">
                                payments
                            </span>
                            <b>Pagos seguros</b>
                            <p>
                                Procesamos los pagos
                                de forma segura.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;