import { useEffect, useState } from "react";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import PaymentForm from "../components/payment_form";

function PaymentCard() {
    const [isMobile, setIsMobile] = useState(false);
    const [addCreditCard, setAddCreditCard] = useState(true);

    const NewCard = () => {
        setAddCreditCard(!addCreditCard)
    }

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 992);
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="container">
                <div className="container text-start m-2 pb-4">
                    <b className="text-end">
                        Tarjeta de pago
                    </b>
                </div>
                {addCreditCard ?
                    <>
                        <div class={`row row-cols-1   ${isMobile ? 'row-cols-md-2' : 'row-cols-md-3'} g-2`}>
                            <div className="col ">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        <Cards
                                            number={'42'}
                                            expiry={''}
                                            cvc={''}
                                            name={''}
                                            focused={''}

                                        />
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div className="ps-3 p-3 text-start">
                            <button type="button" class="btn btn-outline-primary" onClick={() => NewCard()}>
                                <i class="fa-solid fa-plus"></i>
                                {' Añadir nueva tarjeta'}
                            </button>
                        </div>
                    </>
                    :
                    <div >
                        <PaymentForm />
                        <div className="ps-3 p-3 text-start">
                            <button type="button" class="btn btn-danger" onClick={() => NewCard()}>
                                <i class="fa-solid fa-ban"></i>
                                {' Cancelar '}
                            </button>
                        </div>
                    </div>
                }

            </div>

        </>
    );
}

export default PaymentCard;