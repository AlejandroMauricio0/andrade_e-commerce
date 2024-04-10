import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import FooteContact from "../components/footer_contact";
import Carousel from "../components/carousel";
import SubNavBar from "../components/subnabvar";
import Searching from "../pages/searching";
import ViewProduct from "../pages/view_producto";
import Cart from "../pages/cart";
import { useState } from "react";

import Modal from "../components/modal";
import Checkout from "../pages/checkout/pages/checkou";
import FormCheckOut from "../pages/checkout/components/form_checkout";
import NoFound from "../pages/404_error";


function Public({ myCart, setMyCart }) {

    // const [myCart, setMyCart] = useState
    //  const [myCart, setMyCart] = useState([]);



    // const [productsData, setProductsData] = useState([]);
    // const [activateSearch, setActivateSearch] = useState(false);

    // const location = useLocation();
    // let text = location.search;
    // const nameProduct = text.replace("?=", "");


    // const getProducts = async () => {

    //     const url = `http://192.168.1.121:3000/client/search_by_name?name=${nameProduct}&page=1`;


    //     try {
    //         let response = await fetch(url, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //         });

    //         const data = await response.json();

    //         if (data.data && data.data.length > 0) {
    //             // console.log(data.data);
    //             setProductsData(data.data);
    //             setActivateSearch(true);
    //             // Otras operaciones relacionadas con el estado actualizado
    //         } else {
    //             setActivateSearch(false);
    //             // Manejar el caso cuando el arreglo está vacío
    //         }
    //     } catch (error) {
    //         console.error('Error al obtener productos:', error);
    //     }

    // }

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

    // useEffect(() => {
    //     getProducts();
    // }, []);

    const [isModalOpen, setModalOpen] = useState(false);


    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <Routes>
            <Route path="/modal" element={
                <div>
                    <NavBar myCart={myCart} />
                    <h1>Modal</h1>
                    <Modal />
                </div>
            } />
            {/* Validar de compras */}
            <Route path="/checkout/*" element={<>
                <NavBar myCart={myCart} />
                <Checkout />
            </>} >
                {/* <Route path="form" element={<FormCheckOut />} /> */}
            </Route>
            {/* Carrito de compras */}
            <Route path="/cart" element={
                <div className="heigth-100-vh">
                    <NavBar myCart={myCart} />
                    <SubNavBar />
                    <div className="container-fluid">
                        <Cart myCart={myCart} setMyCart={setMyCart} />
                    </div>
                </div>
            } />
            {/* visualiazar detalles del producto */}
            <Route path="/view_producto" element={
                <div>
                    <NavBar myCart={myCart} />
                    <SubNavBar />
                    <div className="container-fluid ">
                        <ViewProduct myCart={myCart} setMyCart={setMyCart} />
                    </div>
                </div>
            }>
            </Route>
            {/* searching */}
            <Route path="/search" element={
                <div>
                    <NavBar myCart={myCart} />
                    {/* <SubNavBar /> */}
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
            {/* 404 not found */}
            <Route path="/*" element={
                <div className="bg-blue">
                    {/* <NavBar myCart={myCart} /> */}
                    {/* <Login /> */}
                    <NoFound />
                </div>
            }></Route>
        </Routes>
    );
}

export default Public;