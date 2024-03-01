function CardProduct({ content }) {
    return (
        <>
            <div class="card-product border ">
                <div class="top-section " style={{ backgroundImage: `url(http://192.168.1.121:3003/Admin/viewImage/${content.image})`, backgroundPosition: 'center' }}>
                </div>

                <div class="bottom-section">
                    <div class="icons">
                        <div class="logo-p color-white">
                            {content.brand}
                        </div>
                    </div>
                    <span class="title" id='title' value={content.model}>{content.model}</span>
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