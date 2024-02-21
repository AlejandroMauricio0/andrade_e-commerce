import imgagen from '../assets/images/banner_login.png'
import data from '../data/data';


import stock from '../assets/images/Ellipse 12.svg'
import no_stock from '../assets/images/Ellipse_red.svg'
import disponible from '../assets/images/Disponible.svg'
import no_disponible from '../assets/images/No Disponible.svg'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function CardProduct({ product, productosModify, startCantidad, endCantidad }) {



    const navigate = useNavigate();


    return (
        <>

            <div className='container mt-4 mb-4'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        productosModify.map((content, index) => (

                            <Link to={{
                                pathname: '../view_producto',
                                search: `?=${content.name}`,
                                // state: { content:content.name }
                            }} state={{ name: `${content.name}`, id: `${content.id}`, price: `${content.price}`, description: `${content.description}`, image: `${content.imagen}` }} className="col" key={index}>
                                <div className="card h-100 border border-secondary border-2b bg-d2d2d2" style={{ cursor: "pointer" }}>

                                    <img src={content.imagen} className="my-2 mx-auto img-fluid " width="90%" height="240px" />
                                    <div className="card-body espacio fs-6 text-start">

                                        <p className="card-title">{content.name} {content.id}
                                        </p>
                                        {content.inStock ?
                                            <>
                                                <img src={stock} alt="" />
                                                <img src={disponible} alt="" width={"90px"} />
                                            </>
                                            :
                                            <>
                                                <img src={no_stock} alt="" />
                                                <img src={no_disponible} alt="" width={"100px"} />
                                            </>
                                        }
                                        <h6 className="card-text text-capitalize gidogu size-30">ID: {content.id}</h6>
                                        <h6 className="card-text text-capitalize gidogu size-30">estado: {content.state}</h6>
                                        <h5 className="card-text text-capitalize gidogu size-30">{content.price}</h5>
                                    </div>
                                </div>
                            </Link>
                        ))}

                </div>
            </div >


        </>
    );
}

export default CardProduct;