import { useState, useEffect } from "react";
import CardProduct from "../../../components/card_products";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function StateProduct() {
    // const alert = useAlert();
    const notify = () => toast.success("El Producto ha cambiado de estado");


    const [stateProduct, setStateProduct] = useState(true);
    const [dataItem, setDataItem] = useState([]);


    const getItemStorage = async () => {
        // alert("estoy ejecutando un post")
        // const url = 'http://192.168.1.121:3003/Admin/listProduct';
        const url = 'http://192.168.100.71:3003/Admin/listProduct';
        // const url = `http://192.168.1.121:3000/client/search_by_name?searchTerm=${nameProduct}`;

        try {
            let response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (data.data && data.data.length >= 1) {
                // console.log(data.data);
                setDataItem(data.data);

                console.log(data);
            }

        } catch (error) {
            console.error('Error al obtener productos:', error);
            // alert('Error al obtener productos:', error);
        }
    }


    const changeState = async (uid, value) => {

        const url = `http://192.168.100.71:3003/Admin/inactivateProduc/${uid}`;

        const raw = JSON.stringify({
            "status": value
        });

        try {
            let response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: raw,
                redirect: "follow"
            });

            const data = await response.json();
            console.log("respuesta ", data);

            if (data.status === "Success") {
                notify();
                getItemStorage();
            }

        } catch (error) {
            console.error('Error al obtener productos:', error);
        }

        
    }

    useEffect(() => {
        getItemStorage();
    }, []);
    // <button onClick={notify}>Notify!</button>

    return (

        <>
            <ToastContainer />

            <div className="container-fluid pt-5 ">
                <div className="container-fluid mt-5  ">


                    <div class="row row-cols-1 row-cols-md-5 g-4">

                        {dataItem.map((content, index) => (
                            <div class="col" key={index}>
                                <div class="card center border border-2 border-dark">
                                    <CardProduct content={content} />
                                    <div class="card-body  rounded m-2">

                                        {
                                            // content.status
                                            content.status
                                                ?
                                                <button onClick={() => changeState(content.id, 0)} type="button" class="btn btn-outline-danger">Desactivar</button>
                                                :
                                                <button onClick={() => changeState(content.id, 1)} type="button" class="btn btn-primary">Activar</button>

                                        }

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </>)
        ;
}

export default StateProduct;