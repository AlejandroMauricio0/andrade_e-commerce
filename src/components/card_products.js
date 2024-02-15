import imgagen from '../assets/images/banner_login.png'
import data from '../data/data';


import stock from '../assets/images/Ellipse 12.svg'
import no_stock from '../assets/images/Ellipse_red.svg'
import disponible from '../assets/images/Disponible.svg'
import no_disponible from '../assets/images/No Disponible.svg'

function CardProduct() {

    

    const products = { data };
    const productos = products.data.product[0].products

    console.log(productos);

    return (
        <>

            <div className='container mt-4'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        productos.map((content, index) => (

                            <div class="col ">
                                <div class="card h-100 border border-secondary border-2b bg-d2d2d2">

                                    <img src={content.imagen} class="my-2 mx-auto img-fluid  " width="90%" height="240px" />
                                    <div className="card-body espacio fs-6 text-start">
                                        {/* <h6 className="card-text text-capitalize gidogu size-30">ID: {content.id}</h6> */}

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
                                    {/* <div className="card-footer">
                                        <div className='d-flex justify-content-center icons'>
                                            <a><i onClick={() => verPdf(pdfData.enlaceDocumento)} className="fa-solid fa-book-open"></i></a>
                                            <a ><i className="fa-solid fa-share-from-square"></i></a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        ))}

                </div>
            </div>
        </>
    );
}

export default CardProduct;