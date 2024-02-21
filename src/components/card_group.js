import img from '../assets/images/simodrive/1.jpg'

function CardGroup() {
    return (
        <>
            <div className="card-group">

                <div className="card border">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <p className="card-text">
                            <small className="text-body-secondary forum size-15">Simodrive LT-Modul INT 80A</small>
                        </p>
                    </div>
                </div>
                <div className="card border">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-body-secondary">Simodrive LT-Modul INT 80A</small></p>
                    </div>
                </div>
                <div className="card border">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-body-secondary">Simodrive LT-Modul INT 80A</small></p>
                    </div>
                </div>
                <div className="card border">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <p className="card-text"><small className="text-body-secondary">Simodrive LT-Modul INT 80A</small></p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default CardGroup;