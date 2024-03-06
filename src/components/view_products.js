import { Link } from 'react-router-dom';
import CardProduct from './card_products';

function ViewProduct({ product, productosModify, startCantidad, endCantidad }) {

    return (
        <>

            <div className='container mt-4 mb-4 '>
                {/* <div className="row row-cols-1 row-cols-md-3 g-4"> */}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* <div class="row-cols-1 row-cols-md-3 g-4 bg-yellow"> */}
                    {
                        productosModify.map((content, index) => (

                            <Link to={{
                                pathname: '../view_producto',
                                search: `?=${content.model}`,
                                // state: { content:content.name }
                            }} state={{

                                stock: `${content.stock}`,
                                image_fk: `${content.image_fk}`,
                                image_fk: `${content.image_fk}`,
                                name: `${content.model}`,
                                id: `${content.numberPart}`,
                                price: `${content.price}`,
                                description: `${content.description}`,
                                image: 'http://192.168.1.121:3003/Admin/viewImage/' + `${content.image}`
                                // image: 'http://192.168.100.71:3003/Admin/viewImage/' + `${content.image}`
                            }}
                                key={index}>

                                <div class="col">
                                    <div className='center'>
                                        {/* Componente para cargar  la imagen del producto */}
                                        <CardProduct content={content} />
                                    </div>
                                </div>
                            </Link>
                        ))}

                </div>
            </div >


        </>
    );
}

export default ViewProduct;