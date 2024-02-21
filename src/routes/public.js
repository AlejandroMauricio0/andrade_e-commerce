import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import FooteContact from "../components/footer_contact";
import Carousel from "../components/carousel";
import SubNavBar from "../components/subnabvar";
import Filter from "../components/filter";
import Products from "../components/products";
import Searching from "../pages/searching";
import ViewProduct from "../pages/view_producto";
import Cart from "../pages/cart";
import { useState, useEffect } from "react";



function Public() {

    // const [myCart, setMyCart] = useState
    const [myCart, setMyCart] = useState([]);




    // const addProduct = () => {
    //     setMyCart([...myCart, {
    //         name: 'producto', quantity: 1
    //     }]);
    // }


    // Guardar estado en el Local Storage
    // useEffect(() => {
    //     localStorage.setItem('myCart', JSON.stringify(myCart));
    // }, [myCart]);

    // Cargar estado desde el Local Storage al montar el componente
    // useEffect(() => {
    //     const storedState = localStorage.getItem('myCart');
    //     if (storedState) {
    //         setMyCart(JSON.parse(storedState));
    //     }
    // }, []);



    // useEffect(() => {
    //     // Guardar en Local Storage solo si hay cambios en myCart
    //     // localStorage.setItem('myCart', JSON.stringify(myCart));

    //     // Recuperar datos del Local Storage solo si no hay datos actuales en myCart
    //     if (!myCart || myCart.length === 0) {
    //         const storedState = localStorage.getItem('myCart');
    //         if (storedState) {
    //             setMyCart(JSON.parse(storedState));
    //         }
    //     }
    // }, [myCart]);


    return (
        <Routes>
            {/* searching */}
            <Route path="/cart" element={
                <div>
                    <NavBar myCart={myCart} />
                    <SubNavBar />
                    <div className="container-fluid">
                        <Cart myCart={myCart} setMyCart={setMyCart} />
                    </div>
                </div>
            } />
            <Route path="/view_producto" element={
                <div>
                    <NavBar myCart={myCart} />
                    <SubNavBar />
                    <div className="container-fluid">
                        <ViewProduct myCart={myCart} setMyCart={setMyCart} />
                    </div>
                </div>
            }>
            </Route>
            {/* searching */}
            <Route path="/search" element={
                <div>
                    <NavBar myCart={myCart} />
                    <SubNavBar />
                    <div className="container-fluid ">
                        <Searching />
                    </div>
                </div>
            }>
            </Route>

            {/* home */}
            <Route path="/dashboard" element={
                <div>
                    <NavBar myCart={myCart} />
                    <SubNavBar />
                    <Carousel />
                    <Footer />
                    <FooteContact />
                </div>
            }>
            </Route>

            {/* login */}
            <Route path="/login" element={
                <div>
                    <NavBar myCart={myCart} />
                    <Login />
                    <FooteContact />
                </div>

            }></Route>
        </Routes>
    );
}

export default Public;