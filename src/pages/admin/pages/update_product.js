import { useState, useEffect } from "react";
import CardProduct from "../../../components/card_products";
import { Link } from "react-router-dom";


function UpdateProduct() {
    const [dataItem, setDataItem] = useState([]);


    const getItemStorage = async () => {
        // alert("estoy ejecutando un post")
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

                console.log("data", data);
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
            <div className="container-fluid pt-5 ">
                <div className="container-fluid mt-5  ">


                    <div class="row row-cols-1 row-cols-md-5 g-4">

                        {dataItem.map((content, index) => (
                            <div class="col" key={index}>


                                <Link to={{
                                    pathname: '../storage/update',
                                    search: `?model=${content.model}`,
                                    // state: { content:content.name }
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
                                    key={index}>

                                    <div class="card center">
                                        <div className='center'>
                                            {/* Componente para cargar  la imagen del producto */}
                                            <CardProduct content={content} />



                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </>)
        ;
}

export default UpdateProduct;