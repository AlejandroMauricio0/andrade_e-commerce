import img1 from '../../../assets/images/simodrive/1.jpg'
function CartReview() {
    return (
        <>

            <div className='container p-3'>
                <div className="border border-2  ms-1 width-100">
                    <div className="d-flex border-bottom">
                        <div className="col-sm-8 p-2 flex-fill text-start">Contenido</div>
                        <div className="col-2 p-2 flex-fill forum">Total:</div>
                    </div>


                    {/* array del producto */}
                    <div className='container heigth-30-vh  overflow-hidden overflow-scroll '>

                        <div className="d-flex border-bottom ">
                            <div className="col-sm-2 -red center flex-fill text-start ">
                                <img src={img1} alt="" width={70} />
                            </div>
                            <div className='col-6 center'>
                                <div className='container-xxl'>
                                    <div className='text-start gidogu'>{'simodrive 9'}</div>
                                    <div className=' text-start m-0 gidogu size-24'>
                                        {'$9500.00'}
                                    </div>
                                </div>

                            </div>

                            <div className="col-2 flex-fill center">
                                <h1 className='gidogu size-25'>$ {'649.00'} </h1>
                            </div>
                        </div>




                    </div>
                </div>
            </div>

        </>
    );
}

export default CartReview;