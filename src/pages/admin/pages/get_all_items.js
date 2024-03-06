import { useEffect, useState } from "react"
import CardProduct from "../../../components/card_products";

function GetAllItems() {
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
            <h1>Todos los productos en almacen </h1>
                <div className="container-fluid mt-5  ">

                    <div class="row row-cols-1 row-cols-md-5 g-4" >

                        {
                            flag ?
                                dataItem.map((content, index) => (
                                    <div class="col" key={index}>
                                        <div class="card center" style={{ position: "inherit" }}>
                                            <CardProduct content={content} />
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
        </>
    );
}

export default GetAllItems;