import image_banner from '../assets/images/cnc_1200x420 1.png'
import image_logo from '../assets/images/ANDRADE_MKTPLAN_BRANDING-03.png'
function Carousel() {
    return (
        <>
            <div className='position-relative'>
                <div id="carouselExampleInterval" className="carousel slide width-100" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={image_banner} className="d-block w-100 img-vh" alt="..." />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={image_banner} className="d-block w-100 img-vh" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={image_banner} className="d-block w-100 img-vh" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <div className="position-absolute top-50 start-0 translate-middle-y color-white bg-yello heigth-100 width-50 center">
                    <div className=''>
                        <p className='gidogu size-64'>Tienda de maquinaria y refacciones</p>
                        <p className='size-20 '>Máquinas que impulsan el futuro, refacciones que aseguran el rendimiento.</p>
                        <div className='center-left'>
                            <button type="button" className="btn btn-outline-warning">Warning</button>
                        </div>

                    </div>
                </div>

                <div className="position-absolute top-50 end-0 translate-middle-y color-white bg-blue-75 heigth-100 center width-50">
                    <img src={image_logo} alt="" width={"50%"}/>
                </div>
            </div>
            {/* <div className='position-relative'>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={image_banner} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={image_banner} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src={image_banner} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button> 

                </div>
                <div class="position-absolute top-50 start-0 translate-middle-y color-white bg-yello heigth-100 width-50 center">
                    <div className=''>
                        <p className='gidogu size-64'>Tienda de maquinaria y refacciones</p>
                        <p className='size-20 '>Máquinas que impulsan el futuro, refacciones que aseguran el rendimiento.</p>
                        <div className='center-left'>
                            <button type="button" class="btn btn-outline-warning">Warning</button>
                        </div>

                    </div>
                </div>
                <div class="position-absolute top-50 end-0 translate-middle-y color-white bg-blue-75 heigth-100 center width-50">
                    <img src={image_logo} alt="" className='width-50' />
                </div>
            </div> */}
        </>
    );
}

export default Carousel;