import { useEffect, useState } from "react";
import Filter from "../components/filter";
import Products from "../components/products";
import ViewProduct from "./view_producto";
import data from '../data/data';

function Searching() {

    const [productsData, setProductsData] = useState([]);

    // realizar peticion de get productos
    const getProducts = async () => {
        try {
            let response = await fetch('http://192.168.100.71:3000/client/search_by_name?name=Simodrive&page=2', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            setProductsData(data.data);
        } catch (error) {
            console.error('Error al obtener productos:', error);
        }





        // alert(productsData)
    }


    // const products = { data };
    const products = productsData;
    // mantener, no tienne que sufrir cambios
    const productos = products
    // puede dufrir cambios por medio del filtro

    const [productosModify, setProductosModify] = useState([])
    const [startCantidad, setStartCantidad] = useState(0);
    const [endCantidad, setEndCantidad] = useState(9);
    // const [productosModify, setProductosModify] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);


    // useEffect(() => {
    //     // Este efecto se ejecuta cada vez que productsData cambia
    //     setProductosModify(productsData);
    // }, [productsData]);

    console.log("moddi ", productosModify)

    return (
        <>

            <div className="row">
                <div className="col-6 col-md-4">
                    <Filter setStartCantidad={setStartCantidad} setEndCantidad={setEndCantidad} startCantidad={startCantidad} endCantidad={endCantidad} productosModify={productosModify} setproductosModify={setProductosModify} productos={productos} />
                </div>
                <div className="col-md-8  heigth-80-vh overflow-hidden">
                    <Products productosModify={productosModify} startCantidad={startCantidad} endCantidad={endCantidad} />
                </div>
            </div>

        </>
    );
}

export default Searching;