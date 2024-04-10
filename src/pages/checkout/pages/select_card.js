import { Link } from "react-router-dom";
import CardSelect from "../components/card_select";

function SelectCard() {
    return (<>
        <div className="heigth-90-vh width-90 bg-white rounded">
            <div className="p-5">
                <div class="row g-3 needs-validation" novalidate>

                    <div class="form-check width-90">
                        <input class="form-check-input  " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label width-100" for="flexRadioDefault1">

                            <CardSelect />
                        </label>
                    </div>

                    <div className="ps-3 p-3 text-start">
                        <Link to={'http://localhost:3000/user/payment'} type="button" class=" ">
                            <i class="fa-solid fa-plus"></i>
                            {'Ir a añadir nueva tarjeta'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default SelectCard;