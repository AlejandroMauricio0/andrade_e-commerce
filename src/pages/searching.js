import { useEffect, useState } from "react";
import Filter from "../components/filter";
import Products from "../components/products";
// import ViewProduct from "./view_producto
// import data from '../data/data';
import { useLocation } from "react-router-dom";

function Searching({ }) {

    const [productsData, setProductsData] = useState([]);
    // const [activate, setActivate] = useState(false);

    const location = useLocation();
    let text = location.search;
    // const productName = text.split("?=");
    const nameProduct = text.replace("?=", "");




    // const products = { data };
    const products = productsData;
    // mantener, no tienne que sufrir cambios
    const productos = products
    // puede dufrir cambios por medio del filtro
    const [productosModify, setProductosModify] = useState([])


    const [startCantidad, setStartCantidad] = useState(0);
    const [endCantidad, setEndCantidad] = useState(9);



    const [activateSearch, setActivateSearch] = useState(false);



    const getProducts = async () => {


        // const url = `http://192.168.1.121:3003/client/search_by_name?name=${nameProduct}&page=1`;
        const url = `http://192.168.100.71:3003/client/search_by_name?searchTerm=${nameProduct}`;
        // const url = `http://192.168.100.71:3000/client/search_by_name?searchTerm=${nameProduct}`;
        // const url = `http://192.168.1.121:3003/client/search_by_name?searchTerm=${nameProduct}`;

        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (data.data && data.data.length > 0) {
                // console.log(data.data);
                setProductsData(data.data);
                setActivateSearch(true);
                // Otras operaciones relacionadas con el estado actualizado
            } else {
                setActivateSearch(false);
                // Manejar el caso cuando el arreglo está vacío
            }
        } catch (error) {
            console.error('Error al obtener productos:', error);
            alert('Error al obtener productos:', error);
        }

    }

    useEffect(() => {
        // Este efecto se ejecuta cada vez que productsData cambia
        setProductosModify(productsData);
    }, [productsData]);

    useEffect(() => {
        console.log('La ubicación ha cambiado:', location.search);

        getProducts();

    }, [location])

    return (
        <>

            <div className="row mt-3">
                <div className="col-md-4 ">
                    <Filter setStartCantidad={setStartCantidad} setEndCantidad={setEndCantidad} startCantidad={startCantidad} endCantidad={endCantidad} productosModify={productosModify} setproductosModify={setProductosModify} productos={productos} />
                </div>
                <div className="col-md-8  heigth-85-vh overflow-hidden ">
                    <Products productosModify={productosModify} startCantidad={startCantidad} endCantidad={endCantidad} activateSearch={activateSearch} />
                </div>
            </div>

        </>
    );
}

export default Searching;