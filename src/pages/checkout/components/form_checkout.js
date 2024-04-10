
function FormCheckOut() {


    return (
        <>
            <div className="row pt-4 text-start">
                <div className="contaniner">
                    <div className="row">
                        <div className="col-sm-6 center  pb-4">

                        </div>
                        <div className="col-sm-6 ">
                            <div className="bg-white width-75 center ma">
                                <div className="bg-white width-75 p-3">
                                    <div className='container p-4 heigth-100 border border-2'>
                                        {/* <p>Subtotal: $24,550.00 MXN</p> */}
                                        <div className="d-flex border-bottom  border-4 pt-3 heigth-25">
                                            <p className="col-sm-8  flex-fill text-start gidogu size-30 ">Resumen de compra</p>
                                            {/* <p className="col-2 flex-fill  center gidogu size-25">  MXN</p> */}
                                        </div>

                                        <div className='pt-3 pb-3 border-bottom border-4'>

                                            {/* <p className='text-start forum size-20'>Los términos relativos a los gastos y envíos serán objeto de acuerdo mutuo.</p> */}

                                            <div className="d-flex  ">
                                                <p className="col-sm-8  flex-fill text-start gidogu size-25 ">Producto</p>
                                                <p className="col-2 flex-fill  center gidogu size-25">$649    MXN</p>
                                            </div>
                                            <div className="d-flex  ">
                                                <p className="col-sm-8  flex-fill text-start gidogu size-25 ">Envio</p>
                                                <p className="col-2 flex-fill  center gidogu size-25"> - </p>
                                            </div>

                                        </div>
                                        <div className=''>

                                            <div className="d-flex  ">
                                                <p className="col-sm-8  flex-fill text-start gidogu size-25 ">Pagas</p>
                                                <p className="col-2 flex-fill  center gidogu size-25">$649    MXN</p>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                                <div class="d-grid p-2 gap-2 col-6 mx-auto">
                                    <button class="btn btn-primary" type="button">continuar compra</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
}

export default FormCheckOut;