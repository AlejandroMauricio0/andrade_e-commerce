import { startTransition, useEffect, useState } from "react";
import Swal from "sweetalert2";
function Description({ myCart, setMyCart, content }) {


    const [cantidad, setCantidad] = useState(0);

    const handleAddItem = () => {
        setCantidad(cantidad + 1);
    }

    const handleDeleteItem = () => {
        if (cantidad >= 1) {
            setCantidad(cantidad - 1)
        }
    }

    const addProduct = (content) => {
        const NewProduct = {
            name: content.name,
            uid: content.id,
            quantity: 1,
            totaly: parseFloat(content.price),
            price: parseFloat(content.price),

        }

        setMyCart([...myCart, NewProduct]);

    }

    const updateProduct = (uid) => {
        const NewProduct = myCart.map((product) => {
            if (product.uid === uid) {
                return {
                    ...product,
                    quantity: product.quantity + 1,
                    totaly: product.totaly + product.price,

                }
            }
            return product;
        })

        setMyCart(NewProduct);

    }

    const validate = (uid, content) => {
        console.log(uid);
        const productFind = myCart.find(product => product.uid === uid);

        if (!!productFind) {
            const Toast = Swal.mixin({
                toast: true,
                position: "bottom-start",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Producto agregado"
            });
            // alert("producto actualiado")
            updateProduct(uid)
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-middle",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Producto agregado al carrito"
            });
            addProduct(content);
        }
    }


    return (
        <>
            <div className="container-fluid ">
                <div className="border-bottom">
                    <h3 className=" text-start mb-3 mt-3">{content.name} {content.id}</h3>

                </div>
                {/* <h3 className="border-bottom text-start"> Simodrive 3TF47-722-0BBA-ZA01 - Conector magnetico</h3> */}
                <div className="border-bottom mt-4">
                    <h5 className=" text-start mb-3 mt-3 size-30 color-7B7B7B gidogu">Price:
                        <b className="gidogu size-30 color-black">  {content.price}</b>
                    </h5>
                </div>

                <div className="heigth-250-px center border-bottom">
                    <div className="btn-group" role="group" aria-label="Default button group">
                        <button className="bg-blue width-40-px center color-white border-none " onClick={() => handleDeleteItem()} >-</button>
                        <div className="bg-yellow width-70-px center">{cantidad}</div>
                        <button className="bg-blue width-40-px center color-white border-none" onClick={() => handleAddItem()} >+</button>
                    </div>
                </div>

                <div className="pt-5">
                    <h2 className="text-start gidogu size-40 color-7B7B7B">Description:</h2>
                    <p className="text-start">
                        {content.description}
                    </p>

                    <div className="center mt-5">
                        <div className="col-md-8">
                            <button type="button" className="btn btn-outline-dark width-100" onClick={() => validate(content.id, content)}>Add to Cart</button>
                        </div>
                        <div className="col-md-8 pt-2">
                            <button type="button" className="btn btn-warning width-100">buy</button>
                        </div>
                        {/* <div className="col-6 col-md-4">.col-6 .col-md-4</div> */}
                    </div>


                </div>
            </div>
        </>
    );
}

export default Description;