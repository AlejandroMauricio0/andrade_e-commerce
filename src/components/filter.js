import { StarRate } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

function Filter({ setStartCantidad, setEndCantidad, startCantidad, endCantidad, productosModify, setproductosModify, productos }) {


    const [currentPage, setCurrentPage] = useState(1);
    const [stateProduct, setStateProduct] = useState("");

    // variables
    const pages = productosModify.length / 9;
    const totalPages = 2;
    const totalProduct = 9


    // funciones de filtrado
    const handleRadioChange = (event) => {
        const selectedState = event.target.value;

        setStateProduct(selectedState);

        const productFilter = productos.filter(content => content.conditions === selectedState);

        setproductosModify(productFilter)
    };


    // funciones para paginación 
    const handlePreviousClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setStartCantidad(startCantidad - 9)
            setEndCantidad(endCantidad - 9)
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            setStartCantidad(startCantidad + 9)
            setEndCantidad(endCantidad + 9)
        }
    };


    return (
        <>
            <div className="width-100 heigth-0 pr-4 border border-3 mt-5 ">

                <div className="width-95 text-start ms-2">
                    <div className="bg-re">
                        <h2 className="border-b">Filtrado por: {stateProduct} </h2>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios1"
                                value="nuevo"
                                checked={stateProduct === "nuevo"}
                                onChange={handleRadioChange}
                            />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Nuevo
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios2"
                                value="semi-nuevo"
                                checked={stateProduct === "semi-nuevo"}
                                onChange={handleRadioChange}
                            />
                            <label className="form-check-label" htmlFor="exampleRadios2">
                                Semi-Nuevo
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios3"
                                value="usado"
                                checked={stateProduct === "usado"}
                                onChange={handleRadioChange}
                            />
                            <label className="form-check-label" htmlFor="exampleRadios3">
                                Usado
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="exampleRadios"
                                id="exampleRadios4"
                                value="piezas"
                                checked={stateProduct === "piezas"}
                                onChange={handleRadioChange}
                            />
                            <label className="form-check-label" htmlFor="exampleRadios4">
                                Para piezas
                            </label>
                        </div>

                    </div>

                </div>

                {/* pagination button*/}

                {/* <div className='center'>
                    <nav aria-label=" Page navigation example">

                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <a className="page-link" href="#" onClick={handlePreviousClick}>
                                    Previous
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">{currentPage}</a></li>
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <a className="page-link" href="#" onClick={handleNextClick}>
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                // </div> */}
            </div>
        </>
    );
}

export default Filter;