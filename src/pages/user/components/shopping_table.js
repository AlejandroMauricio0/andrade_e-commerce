import img1 from '../../../assets/images/simodrive/1.jpg'

function ShoppingTable() {
    return (
        <>
            <div className="rounded container border border-2">
                <div className="text-start border-bottom border-3">
                    <b>27 septiembre de 2023</b>
                </div>
                <div>
                    <div className='container heigth-82 overflow-hidden overflow-scroll '>



                        <div className="d-flex " >
                            <div className="col-sm-2 -red center flex-fill text-start ">
                                <img src={img1} alt="" width={70} />
                            </div>
                            <div className='col-6 center'>
                                <div className='container-xxl'>
                                    {/* <div className='text-start gidogu '>{'Simodrive 39'}</div>
                                    <div className=' text-start m-0  gidogu size-24'>
                                        ${'39949'}
                                    </div> */}
                                    <div class="ps-2 flex-fill text-start">
                                        <b>{'Simodrive 3TF9'}</b>
                                        <br />
                                        {'$10,000.00'}
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 flex-fil l center">

                            </div>
                            <div className="col-2 flex-fill center">
                                <h1 className='gidogu size-25'>{'   '} </h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default ShoppingTable;