import disable from '../assets/images/disiable.svg'
import disponible from '../assets/images/Disponible.svg'

function CardProduct({ content }) {
    return (
        <>
            <div class="card-product border "  style={{position:'inherit'}}>
                <div class="top-section " style={{ backgroundImage: `url(http://192.168.1.121:3003/Admin/viewImage/${content.image})`, backgroundPosition: 'center' }}>
                </div>

                <div class="bottom-section">
                    <div class="icons">
                        <div class="logo-p color-white">
                            {content.brand}
                        </div>
                    </div>

                    <span class="title" id='title' value={content.model}>{content.model}</span>

                    <div className="center">

                        {content.status ?
                            <div className='col-sm-8 '>
                                <img src={disponible} width={"90px"} alt="" />
                            </div>
                            :
                            <div className='col-sm-8 '>
                                <img src={disable} width={"120px"} alt="" />
                            </div>

                        }
                    </div>

                    <div class="row row1">
                        <div class="item">
                            <span class="big-text">${content.price}</span>
                            <span class="regular-text">Precio</span>
                        </div>
                        <div class="item">
                            <span class="big-text" style={{ fontSize: "9px" }}>{content.numberPart}</span>
                            <span class="regular-text">ID</span>
                        </div>
                        <div class="item">
                            <span class="big-text">{content.conditions}</span>
                            <span class="regular-text">Condiciones </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default CardProduct;