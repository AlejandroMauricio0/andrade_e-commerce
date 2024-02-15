import master_card from '../assets/images/icons8-mastercard.svg'
import paypal from '../assets/images/icons8-paypal.svg'
import visa from '../assets/images/icons8-visa.svg'

function FooteContact() {
    return (
        <>


            <div className="bg-blue color-white container-fluid mt-4  ">
                <div>
                    <div className="row g-3 ">
                        <div className="col-md-3 ">
                            <label className="form-label width-100">
                                <b className="float-start">Refacciones</b>
                            </label>
                            <br />
                            <p className="text-start">
                                Tenemos las brocas para tu CNC router además refacciones y consumibles. y otros compatibles, desde tornillos
                                hasta partes como motores, controladores y tubos laser.
                            </p>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="validationServer02" className="form-label  width-100 text-start">
                                <b>
                                    Marcas de Producto
                                </b>
                            </label>

                            {/* <b>Marcas de productos</b> */}
                            <p className="text-start">Siemens <br />
                                Heidenhain <br />
                                Wieland <br />
                                EATON<br />
                                Scheinder Electric <br />
                                OMRON<br />
                                Yaskawa Electric</p>

                        </div>
                        <div className="col-md-2 ">
                            <label htmlFor="validationServerUsername" className="form-label width-100 text-start">
                                <b>
                                    Nuestras Politicas
                                </b>
                            </label>
                            <div className="input-group has-validation">
                                {/* <span className="input-group-text" id="inputGroupPrepend3">@</span> */}
                                {/* <b>Nuestras Politicas</b> */}
                                <ul className="text-start">
                                    <li className='text '>Contacto</li>
                                    <li>Politica de Privacidad</li>
                                    <li>Politica de Reembolso y Devoluciones</li>
                                    <li>Politica de envío</li>
                                    <li>Termino de Servicio y Condiciones</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 ">
                            <label htmlFor="validationServer03" className="form-label width-100 text-start">
                                <b>Contacto</b>
                            </label>
                            <p className="text-start">Télefono: +52 222 947 5849
                                <br />
                                Télefono: +52 222 947 5850
                                <br />
                                Correo: ventas@andrademex.com</p>

                        </div>
                        <div className="col-md-3 ">
                            <label htmlFor="validationServer04" className="form-label">Aceptamos</label>
                            <div className="container text-center">
                                <div className="row">
                                    <div className="col center">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="120px" alt="" />
                                    </div>
                                    <div className="col center">
                                        <img src={master_card} className='' width={"80x"} alt="" />
                                        {/* <img src={paypal} className='' width={"80px"} alt="" /> */}
                                    </div>
                                    <div className="col ">
                                        <img src={visa} className='' width={"80px"} alt="" />

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default FooteContact;