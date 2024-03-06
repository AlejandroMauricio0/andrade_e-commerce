import { useEffect, useState } from "react"
import CardProduct from "../../../components/card_products";
import { Link } from "react-router-dom";

function UpdateProduct() {
    const [dataItem, setDataItem] = useState([]);
    const [flag, setflag] = useState(false);


    const getItemStorage = async () => {
        const url = 'http://192.168.1.121:3003/Admin/listProduct';

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
            <div className="container-fluid pt-5 heigth-100-vh width-100 bg-ededede" >
                <h1 className="">Actualizar Producto</h1>
                <div className="container-fluid mt-5  ">

                    <div class="row row-cols-1 row-cols-md-5 g-4" >

                        {
                            flag ?
                                dataItem.map((content, index) => (
                                    <Link
                                        to={{
                                            pathname: '../form_product',
                                            search: `?model=${content.model}`,
                                        }} state={{
                                            img3: `${content.images[3]}`,
                                            img2: `${content.images[2]}`,
                                            img1: `${content.images[1]}`,
                                            img0: `${content.images[0]}`,
                                            brand: `${content.brand}`,
                                            status: `${content.status}`,
                                            conditions: `${content.conditions}`,
                                            stock: `${content.stock}`,
                                            model: `${content.model}`,
                                            id: `${content.numberPart}`,
                                            price: `${content.price}`,
                                            description: `${content.description}`,
                                            image: 'http://192.168.1.121:3000/Admin/viewImage/' + `${content.image}`
                                        }}

                                    >

                                        <div class="col" key={index}>
                                            <div class="card center" style={{ position: "inherit" }}>
                                                <CardProduct content={content} />
                                            </div>
                                        </div>
                                    </Link>

                                ))
                                :
                                <div className="center width-100 heigth-85-vh">
                                    <h1>No hay productos :(</h1>
                                </div>
                        }


                    </div>

                </div>
            </div>
        </>
    );
}

export default UpdateProduct;