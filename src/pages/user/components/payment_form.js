import React, { useEffect, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'
const PaymentForm = () => {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;

        setState((prev) => ({ ...prev, [name]: value }));
    }

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    }


    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 800);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <>

            <div className='container-fluid'  >
                <div className="row " >
                    
                    <div className='col-sm-5 center'  >
                        <div>
                            <Cards
                                number={state.number}
                                expiry={state.expiry}
                                cvc={state.cvc}
                                name={state.name}
                                focused={state.focus}

                            />
                        </div>
                    </div>
                    <div className={`${isMobile ? 'col-sm-8' : 'col-sm-7'} `}>
                        <h6 className='text-start p-2'>Payment Details</h6>
                        <form>
                            <input
                                className='form-control'
                                type="text"
                                name="number"
                                pattern="\d{18}"
                                maxLength="16"
                                preview={false}
                                title="El número debe tener exactamente 18 dígitos."
                                placeholder="Card Number"
                                value={state.number}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                            />

                            <br />
                            <input
                                className='form-control'
                                type="text"
                                name="name"
                                placeholder="yout name"
                                value={state.name}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                            />
                            <br />
                            <input
                                type="tel"
                                name="cvc"
                                className="form-control"
                                placeholder="CVC"
                                pattern="\d{3,4}"
                                maxLength="4"
                                required
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                            />

                            <br />
                            <input
                                type="tel"
                                name="expiry"
                                className="form-control"
                                placeholder="Valid Thru"
                                maxLength="4"
                                pattern="\d\d/\d\d"
                                required
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                            />
                        </form>
                        <div className='p-3'>
                            <button type="button" class="btn btn-outline-primary" >
                                <i class="fa-solid fa-plus"></i>
                                {' Añadir tarjeta'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default PaymentForm;