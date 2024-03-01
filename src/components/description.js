import { startTransition, useEffect, useState } from "react";
import Swal from "sweetalert2";
function Description({ myCart, setMyCart, content }) {


    const [cantidad, setCantidad] = useState(1);

    const handleAddItem = () => {

        if (cantidad < content.stock) {
            setCantidad(cantidad + 1);
        }
    }

    const handleDeleteItem = () => {
        if (cantidad != 1) {
            setCantidad(cantidad - 1)
        }

        // console.log(content);
    }

    const addProduct = (content) => {
        const NewProduct = {
            stock: content.stock,
            name: content.name,
            uid: content.id,
            quantity: cantidad,
            totaly: parseFloat(content.price) * cantidad,
            price: parseFloat(content.price),
            image: content.image
        }

        setMyCart([...myCart, NewProduct]);

    }

    const updateProduct = (uid, addToCart) => {
        const NewProduct = myCart.map((product) => {
            if (product.uid === uid && product.quantity < content.stock) {

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
                    title: "Agregaste a tu carrito"
                });
                return {
                    ...product,
                    quantity: addToCart,

                    totaly: (product.price * addToCart),

                }

            } else {
                Swal.fire({
                    title: "Oops...",
                    icon: "error",
                    text: 'No pudimos agregar este producto a tu carrito; \n\t   Ya tienes la cantidad límite de compra para este producto.',
                });
            }
            return product;
        })

        setMyCart(NewProduct);

    }

    const validate = (uid, content) => {
        const productFind = myCart.find(product => product.uid === uid);


        if (!!productFind) {
            var flag = productFind.quantity + cantidad

            console.log(flag);

            if (flag < productFind.stock) {
                var addToCart = productFind.quantity + cantidad;
                updateProduct(uid, addToCart)
            } else {
                var resta = flag - productFind.stock;
                var flag2 = flag - resta;

                updateProduct(uid, flag2)
            }
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
                <div className="border-bottom mt-2">
                    <h5 className=" text-start pb-2 pt-2 size-30 color-7B7B7B gidogu">Precio:
                        <b className="gidogu size-30 color-black"> MXN ${content.price}</b>
                    </h5>
                </div>

                <div className="pt-4 pb-4 center border-bottom">
                    <div className="btn-group" role="group" aria-label="Default button group">
                        <button className="bg-blue width-40-px center color-white border-none " onClick={() => handleDeleteItem()} >-</button>
                        <div className="bg-yellow width-70-px center">{cantidad}</div>
                        <button className="bg-blue width-40-px center color-white border-none" onClick={() => handleAddItem()} >+</button>
                    </div>
                    <h6 className="text-secondary">({content.stock} Disponibles)</h6>
                </div>

                <div className="pt-4">
                    <h2 className="text-start gidogu size-40 color-7B7B7B">Descripción:</h2>
                    <p className="justify-txt ">
                        {content.description}
                    </p>

                    <div className="center mt-4">
                        <div className="col-md-8">
                            <button type="button" className="btn btn-outline-dark width-100" onClick={() => validate(content.id, content)}>Añadir a Carrito</button>
                        </div>
                        <div className="col-md-8 pt-2">
                            <button type="button" className="btn btn-warning width-100">Comprar</button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default Description;