import { useState, useEffect } from "react";
import CardProduct from "../../../components/card_products";
import Swal from "sweetalert2";



function DeleteProduct() {
    const [dataItem, setDataItem] = useState([]);
    const [respuesta, setRespuesta] = useState([]);
    const [flag, setflag] = useState(false);



    const removeElement = (uid) => {
        const newData = dataItem.filter((item) => item.id !== uid);
        setDataItem(newData)

        if (dataItem.length <= 1) {
            setflag(!flag)
        }
        console.log("data ?", dataItem.length);
    }


    const deleteItemStorage = (id) => {

        try {
            const requestOptions = {
                method: "DELETE",
                redirect: "follow"
            };

            fetch(`http://192.168.100.71:3003/Admin/destroyProduct/${id}`, requestOptions)
                .then((response) =>
                    setRespuesta(respuesta.data),
                    removeElement(id),
                    Swal.fire({
                        icon: "success",
                        title: "Exito",
                        text: "Se elimino sastifactoriamente el producto!",
                    })
                )
                .then((result) => console.log(result))
                .catch((error) => console.error(error));



        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "Error",
                title: "Error",
                text: "Ocurrio un porblema",
            })
        }

    }


    const getItemStorage = async () => {

        const url = 'http://192.168.100.71:3003/Admin/listProduct';

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
                setDataItem(data.data);
                setflag(!flag)
                console.log(data);
            }

        } catch (error) {
            console.error('Error al obtener productos:', error);
            // alert('Error al obtener productos:', error);
        }
    }

    useEffect(() => {
        getItemStorage();
    }, []);

    return (
        <>
            <div className="container-fluid pt-5     ">
                <div className="container-fluid pt-5  ">


                    <div class="row row-cols-1 pt-2 row-cols-md-5 g-4 ">
                        {flag ?

                            dataItem.map((content, index) => (
                                <div class="col" key={index}>
                                    <div class="card center border border-2 border-dark">
                                        <CardProduct content={content} />

                                        <div class="d-grid gap-2 p-2 col-6 mx-auto">
                                            <button class="btn btn-outline-danger" type="button" onClick={() => deleteItemStorage(content.id)}>Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                            :
                            <div className="center width-100 heigth-85-vh">
                                <h1>No hay productos :(</h1>
                            </div>
                        }



                    </div>

                </div>
            </div>
        </>)
        ;
}

export default DeleteProduct;