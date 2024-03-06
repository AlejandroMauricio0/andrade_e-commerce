
function FormCheckOut() {


    return (
        <>
            <div className="row pt-4 text-start">
                <div className="contaniner">
                    <div className="row">
                        <div className="col-sm-6 center  pb-4">
                            <div className="width-90 bg-white rounded">
                                <div className="p-5">
                                    <form class="row g-3 needs-validation" novalidate>
                                        <div class="col-12">
                                            <label for="inputPassword4" class="form-label text-start">Nombre y apellido</label>
                                            <input type="text" class="form-control" id="validationCustom01" required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>

                                        <div class="col-md-3">
                                            <label for="validationCustom05" class="form-label">Codigo postal</label>
                                            <input type="text" class="form-control" id="validationCustom05" required />
                                            <div class="invalid-feedback">
                                                El campo no puede estar vacio.
                                            </div>
                                        </div>

                                        <div className="container">
                                            <div className="row">
                                                <div class="col-md-6">
                                                    <label for="validationCustom03" class="form-label">Estado</label>
                                                    <input type="text" class="form-control" id="validationCustom03" required />
                                                    <div class="invalid-feedback">
                                                        El campo no puede estar vacio.
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="validationCustom03" class="form-label">Municipio/Alcaldia</label>
                                                    <input type="text" class="form-control" id="validationCustom03" required />
                                                    <div class="invalid-feedback">
                                                        El campo no puede estar vacio.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <label for="validationCustom03" class="form-label">Colonia</label>
                                            <input type="text" class="form-control" id="validationCustom03" required />
                                            <div class="invalid-feedback">
                                                El campo no puede estar vacio.
                                            </div>
                                        </div>

                                        <div className="container">
                                            <div className="row">
                                                <div class="col-md-6">
                                                    <label for="validationCustom03" class="form-label">Calle</label>
                                                    <input type="text" class="form-control" id="validationCustom03" required />
                                                    <div class="invalid-feedback">
                                                        El campo no puede estar vacio.
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="validationCustom03" class="form-label">Numero exterios (opcional)</label>
                                                    <input type="text" class="form-control" id="validationCustom03" required />
                                                    <div class="invalid-feedback">
                                                        El campo no puede estar vacio.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div class="col-md-6">
                                                <label for="validationCustom03" class="form-label">Colonia</label>
                                                <input type="text" class="form-control" id="validationCustom03" required />
                                                <div class="invalid-feedback">
                                                    El campo no puede estar vacio.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div class="col-md-6">
                                                <label for="validationCustom03" class="form-label">Nº interior/Depto (opcional)</label>
                                                <input type="text" class="form-control" id="validationCustom03" required />
                                                <div class="invalid-feedback">
                                                    El campo no puede estar vacio.
                                                </div>
                                            </div>
                                        </div>

                                        <div className="container pt-3">
                                            <h6>¿Entre qué calles está? (opcional)</h6>
                                            <div className="row">
                                                <div class="col-md-6">
                                                    <label for="validationCustom03" class="form-label">Calle 1</label>
                                                    <input type="text" class="form-control" id="validationCustom03" required />
                                                    <div class="invalid-feedback">
                                                        El campo no puede estar vacio.
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="validationCustom03" class="form-label">calle 2</label>
                                                    <input type="text" class="form-control" id="validationCustom03" required />
                                                    <div class="invalid-feedback">
                                                        El campo no puede estar vacio.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="container">
                                            <div class="col-md-6">
                                                <label for="validationCustom03" class="form-label">Telefono de contacto</label>
                                                <input type="text" class="form-control" id="validationCustom03" required />
                                                <div class="invalid-feedback">
                                                    El campo no puede estar vacio.
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <label for="inputStock" class="form-label">Descripción</label>
                                                <textarea name="description" type="text" class="form-control" id="inputStock" placeholder="Descripción de la fachada, puntos de referencia para encontrarla, indicaciones de seguridad, etc." />
                                            </div>
                                        </div>


                                        <div class="col-12">
                                            <button class="btn btn-primary" type="submit">Submit form</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
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
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
}

export default FormCheckOut;