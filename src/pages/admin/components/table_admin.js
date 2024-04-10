import { useState } from "react";
import ModalStatus from "./modal_status";

function TableAdmin() {

    const [isModalVisible, setIsModalVisible] = useState(false);


    const changeStatus = () => {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Cambiar estatus del producto a:
                        </div>      
                        <div class="modal-footer">
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button> */}
                            <button type="button" class="btn btn-outline-success">Enviado</button>
                            <button type="button" class="btn btn-outline-danger">Cancelado</button>
                            <button type="button" class="btn btn-outline-warning">En espera</button>
                            <button type="button" class="btn btn-outline-info">Procesando pagó</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}


            <div className="container-fluid pt-5 heigth-100-vh width-100 bg-ededede" >
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio $</th>
                            <th scope="col">Estatus produto</th>
                        </tr>
                    </thead>
                </table>
                <div className="container-fluid mt-5 overflow-hidden overflow-scroll" style={{ position: "inherit" }}>

                    <div className='heigth-80-vh' style={{ position: "inherit" }}>

                        <table class="table">
                            <tbody class="table-group-divider">
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>HEIDEINHAIN HR 410 FS</td>
                                    <td>$10,000.00</td>
                                    <td>
                                        <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Enviado
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>HEIDEINHAIN HR 410 FS</td>
                                    <td>$10,000.00</td>
                                    <td>
                                        <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            En espera
                                        </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TableAdmin;