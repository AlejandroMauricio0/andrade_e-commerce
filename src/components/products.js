import { useLocation } from "react-router-dom";
import CardProduct from "./card_products";
import { useEffect, useState } from "react";

function Products({ productosModify, startCantidad, endCantidad }) {




    const [activate, setActivate] = useState(false);

    const location = useLocation();
    let text = location.search;
    const product = text.split("?=");

    console.log("producto her", productosModify);


    const findProduct = () => {
        if (1 >= 1) {
            setActivate(true);
        } else {
            setActivate(false);
        }
    }

    useEffect(() => {
        findProduct();
    }, []);

    return (
        <>
            <div className="border border-3 mt-5 heigth-100 heigth-100-vh overflow-scroll ">
                {/* <h2 className="text-start border-b width-97 ms-3">Productos para "{product}" s{startCantidad} e{endCantidad}</h2> */}
                <h2 className="text-start border-b width-97 ms-3">Productos para "{product}" </h2>

                {
                    activate ?
                        <CardProduct product={product} productosModify={productosModify} startCantidad={startCantidad} endCantidad={endCantidad} />
                        :
                        <h3 className="text-start ps-3 pt-2">No se encontro el producto en nuestra Base de Datos</h3>
                }
            </div>
        </>
    );
}

export default Products;