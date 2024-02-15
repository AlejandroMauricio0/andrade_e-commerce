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



function Public() {
    return (
        <Routes>
            {/* searching */}
            <Route path="/view_product" element={
                <div>
                    <NavBar />
                    <SubNavBar />
                    <div className="container-fluid">
                        <ViewProduct/>
                    </div>
                </div>
            }>
            </Route>
            {/* searching */}
            <Route path="/search" element={
                <div>
                    <NavBar />
                    <SubNavBar />
                    <div className="container-fluid">
                        <Searching/>
                    </div>
                </div>
            }>
            </Route>

            {/* home */}
            <Route path="/dashboard" element={
                <div>
                    <NavBar />
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
                    <NavBar />
                    <Login />
                    <FooteContact />
                </div>

            }></Route>
        </Routes>
    );
}

export default Public;