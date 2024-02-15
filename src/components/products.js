import CardProduct from "./card_products";

function Products() {
    return (
        <>
            <div className="border border-3 mt-5 heigth-100">
                <h2 className="text-start border-b width-97 ms-3 ">Productos para "Siemens"</h2>

                <CardProduct/>
            </div>
        </>
    );
}

export default Products;