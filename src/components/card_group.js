import { useEffect, useState } from 'react';
import img from '../assets/images/simodrive/1.jpg'

function CardGroup() {

    const [dataItem, setDataItem] = useState([]);


    const getDataRamdom = async () => {
        const url = 'http://192.168.100.71:3003/client/items_Random';
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

    useEffect(() => {
        getDataRamdom();
    }, [])

    return (
        <>
            <div className="card-group">

                {
                    dataItem.map((content, index) => (
                        <div className="card border">
                            <img src={'http://192.168.100.71:3003/Admin/viewImage/' + `${content.image}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text"></p>
                                <p className="card-text">
                                    <small className="text-body-secondary forum size-15">{content.model}</small>
                                </p>
                            </div>
                        </div>
                    ))
                }



            </div>
        </>
    );
}

export default CardGroup;