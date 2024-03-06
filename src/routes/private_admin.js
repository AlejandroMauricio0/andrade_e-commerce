import { Route, Routes } from "react-router-dom";
import NavbarAdmin from "../pages/admin/components/navbar";
import Formulario from "../pages/admin/components/formulario";
import GetAllItems from "../pages/admin/pages/get_all_items";
import StateProduct from "../pages/admin/pages/state_product";
import UpdateProduct from "../pages/admin/pages/update_product";
import FormUpDate from "../pages/admin/components/form_update";
import DeleteProduct from "../pages/admin/pages/delete_product";
import NavBarleft from "../pages/admin/components/bar_left";

function Private() {

    return (

        <Routes>
            <Route path="/storage/" element={<NavBarleft />} >

                <Route path="all_products" element={<div className="width-100" style={{ position: "inherit" }}>
                    <GetAllItems />
                </div>} />
                <Route path="add_product" element={<Formulario />} />
                <Route path="delete_product" element={<DeleteProduct />} />
                <Route path="state_product" element={<StateProduct />} />
                <Route path="update_producto/" element={<UpdateProduct />} >
                </Route>
                <Route path="form_product/" element={<FormUpDate />} />
            </Route>
        </Routes>

    );
}

export default Private;