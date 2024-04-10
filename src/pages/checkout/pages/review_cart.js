import CardLocation from "../../user/components/card_locations";
import CardSelect from "../components/card_select";
import CartReview from "../components/cart";

function ReviewCart() {
    return (
        <>

            <div className="heigth-90-vh width-90 bg-white rounded">
                <div className="p-5">
                    <div class="row g-3 needs-validation" novalidate>
                        <h6>Detalle del envio</h6>

                        <CardLocation />
                        <CartReview />
                        <div className="container">
                        </div>

                        <h6>Detalle del pago</h6>
                        <CardSelect />

                    </div>
                </div>
            </div>

        </>
    );
}

export default ReviewCart;