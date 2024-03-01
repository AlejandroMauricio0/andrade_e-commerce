import { Route, Routes } from "react-router-dom";
import NavbarAdmin from "../pages/admin/components/navbar";
import Formulario from "../pages/admin/components/formulario";
import GetAllItems from "../pages/admin/pages/get_all_items";
import StateProduct from "../pages/admin/pages/state_product";
import UpdateProduct from "../pages/admin/pages/update_product";
import FormUpDate from "../pages/admin/components/form_update";
import DeleteProduct from "../pages/admin/pages/delete_product";

function Private() {

    return (

        <Routes>
            <Route path="storage/products/delete_product"
                element={
                    <div className="bg-ededede heigth-100-vh ">
                        <NavbarAdmin />
                        <DeleteProduct />
                    </div>
                }
            />
            <Route path="storage/update"
                element={
                    <div className="bg-ededede">
                        <NavbarAdmin />
                        {/* <UpdateProduct  /> */}
                        <FormUpDate />
                    </div>
                }
            />
            <Route path="/storage/products/update"
                element={
                    <div className="bg-ededede heigth-100-vh ">
                        <NavbarAdmin />
                        <UpdateProduct />
                    </div>
                }
            />
            {/* estado del producto Activado / Desactivado  */}
            <Route path="/storage/products/state"
                element={
                    <div className="bg-ededede heigth-100-vh">
                        <NavbarAdmin />
                        <StateProduct />
                    </div>
                }
            />
            <Route path="/storage/add_items"
                element={
                    <div className="bg-ededede">
                        <NavbarAdmin />
                        <Formulario />

                    </div>
                }
            />

            {/* actualizar  */}
            <Route path="/storage/update_items"
                element={
                    <div className="bg-ededede heigth-100-vh">
                        <NavbarAdmin />
                        <Formulario />
                    </div>
                }
            />

            {/* Vizualizar todo los productos */}
            <Route path="/storage/get_all_items" element={
                <div className="bg-ededede ">
                    <NavbarAdmin />
                    <GetAllItems />
                </div>
            } />
        </Routes>

    );
}

export default Private;