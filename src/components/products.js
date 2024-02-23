import { useLocation } from "react-router-dom";
import CardProduct from "./card_products";
import { useEffect, useState } from "react";
import Load from './load'

function Products({ productosModify, startCantidad, endCantidad, activateSearch }) {




    const [activate, setActivate] = useState(false);
    const [loadItems, setLoadItems] = useState(<Load />)

    const location = useLocation();
    let text = location.search;
    const product = text.split("?=");

    console.log("producto her", productosModify);


    const loadProducts = () => {
        if (productosModify.length >= 1) {
            setActivate(true);
        } else {
            setActivate(false);
        }
    }



    const loadData = () => {
        setTimeout(() => {
            setLoadItems(
            )
        }, 1000);
    };

    useEffect(() => {
        loadProducts();
        loadData();


    }, []);

    return (
        <>
            <div className="border border-3 mt-5 heigth-100 heigth-90 overflow-scroll ">
                {/* <h2 className="text-start border-b width-97 ms-3">Productos para "{product}" s{startCantidad} e{endCantidad}</h2> */}
                <h2 className="text-start border-b width-97 ms-3">Productos para "{product}" </h2>

                {
                    activateSearch ?
                        // loadItems
                        // < CardProduct product={product} productosModify={productosModify} startCantidad={startCantidad} endCantidad={endCantidad} />
                        < CardProduct product={product} productosModify={productosModify} startCantidad={startCantidad} endCantidad={endCantidad} />

                        // loadItems 
                        :
                        <h3 className="text-start ps-3 pt-2 center heigth-90">No se encontro el producto</h3>
                }
            </div>
        </>
    );
}

export default Products;