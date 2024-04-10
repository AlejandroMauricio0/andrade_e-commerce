import { Route, Routes } from "react-router-dom";
import Profile from "../pages/user/pages/profile";
import BarLeftUser from "../pages/user/components/barleft_user";
import LocationHome from "../pages/user/pages/location";
import NavBar from "../components/navbar";
import { useState } from "react";
import Cart from "../pages/cart";
import Checkout from "../pages/checkout/pages/checkou";
import FormCheckOut from "../pages/checkout/components/form_checkout";
import PaymentCard from "../pages/user/pages/payment_card";
import ShoppingHistory from "../pages/user/pages/shopping_history";

function PrivateUser(myCart, setMyCart) {
    // const [myCart, setMycart] = useState([]);
    return (
        <Routes>
            {/* <Route path="/profile" element={<Profile/>} /> */}
            <Route path="/dashboard/" element={
                <div className="fixed-top" >
                    <NavBar myCart={myCart} className="fixed-top" />
                    <BarLeftUser style={{ zIndex: 3 }} />
                </div>
            } >
                <Route path="profile" element={<Profile />} />
                <Route path="history" element={<ShoppingHistory />} />



                <Route path="location" element={
                    <div className="">
                        <LocationHome />
                    </div>} />
                {/* <Route path="my_cart" element={ <Cart myCart={myCart} setMyCart={setMyCart} />} /> */}
            </Route>

            <Route path="payment" element={
                <div  >
                    <NavBar myCart={myCart} className="" />

                    <PaymentCard />
                </div>

            } />
        </Routes >
    );
}

export default PrivateUser;