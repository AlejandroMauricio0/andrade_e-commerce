import Filter from "../components/filter";
import Products from "../components/products";

function Searching() {
    return (
        <>
            <div className="row">
                <div className="col-6 col-md-4 ">
                    <Filter />
                </div>
                <div className="col-md-8 bg-geen">
                    <Products />
                </div>
            </div>
        </>
    );
}

export default Searching;