import { Route, Routes } from "react-router-dom";
import FormCheckOut from "../components/form_checkout";
import NavBar from "../../../components/navbar";
import NavbarAdmin from "../../admin/components/navbar";

function Checkout() {
    return (
        <>
            <Routes>
                <Route path="/form" element={<>
                
                    <FormCheckOut /></>} />
            </Routes>
        </>
    );
}

export default Checkout;