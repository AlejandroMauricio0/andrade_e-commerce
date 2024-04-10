import { Route, Routes } from "react-router-dom";
import LocationForm from "../components/form_location";
import PurchaseOverview from "../components/purchase_overview";
import SelectCart from "./select_card";
import ReviewCart from "./review_cart";

function Checkout() {
    return (
        <>
            <Routes>
                <Route path="/form" element={
                    <div className="bg-ededede">
                        <div className="row pt-4 text-start">
                            <div className="contaniner">
                                <div className="row">
                                    <div className="col-sm-6 center  pb-4">
                                        <LocationForm />
                                    </div>
                                    <div className="col-sm-6 ">
                                        <PurchaseOverview />
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div>} />
                <Route path="/pay" element={
                    <div className="bg-ededede">
                        <div className="row pt-4 text-start">
                            <div className="contaniner">
                                <div className="row">
                                    <div className="col-sm-6 center  pb-4">
                                        <SelectCart/>
                                    </div>
                                    <div className="col-sm-6 ">
                                        <PurchaseOverview />
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div>} />
                <Route path="/pay/review" element={
                    <div className="bg-ededede">
                        <div className="row pt-4 text-start">
                            <div className="contaniner">
                                <div className="row">
                                    <div className="col-sm-6 center  pb-4">
                                        <ReviewCart/>
                                    </div>
                                    <div className="col-sm-6 ">
                                        <PurchaseOverview />
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div>} />
            </Routes>
        </>
    );
}

export default Checkout;