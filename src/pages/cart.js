import { useEffect, useState } from 'react';
import product from '../assets/images/simodrive/1.jpg'
import CardGroup from '../components/card_group';
import Swal from 'sweetalert2';

// or via CommonJS

function Cart({ myCart, setMyCart }) {


    const [totalPay, setTotalPay] = useState(0);



    const total = () => {
        const totalSum = myCart.reduce((acumulador, producto) => {
            // Convertimos el precio a número eliminando las comas y parseando como float
            const precio = parseFloat(producto.totaly);

            // Sumamos el precio al acumulador
            return acumulador + precio;
        }, 0);
        setTotalPay(totalSum);

        console.log("suma", totalSum);
    }

    const addItemProduct = (uid) => {
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
        total()
    }

    const removeElement = (uid) => {
        console.log(uid)
        const newCart = myCart.filter((item) => item.uid !== uid);
        setMyCart(newCart)
        // setMyCart(newcart)
    }

    // message delete
    const deleteItemCar = (quantity, uid) => {

        if (quantity <= 1) {

            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    removeElement(uid);

                }
            });
        } else {
            // alert(uid)
            const NewProduct = myCart.map((product) => {
                if (product.uid === uid) {
                    return {
                        ...product,
                        quantity: product.quantity - 1,
                        totaly: product.totaly - product.price,
                    }
                }
                return product;
            })

            total()

            setMyCart(NewProduct);
        }

    }

    useEffect(() => {
        const calculateTotal = () => {
            const totalSum = myCart.reduce((acumulador, producto) => {
                const precio = parseFloat(producto.totaly);
                return acumulador + precio;
            }, 0);
            setTotalPay(totalSum);
            console.log("suma", totalSum);
        };
        calculateTotal();
    }, [myCart]);

    return (
        <>
            <div className="mt-2">
                <p className="text-start gidogu size-64">Mi carrito</p>
                <div className="row">
                    <div className="col-sm-7">

                        <div className="border border-2  mb-3 heigth-50">
                            <div className="d-flex border-bottom">
                                <div className="col-sm-8 p-2 flex-fill text-start">Contenido</div>
                                <div className="col-3 p-2 flex-fill forum center ">Cantidad</div>
                                <div className="col-2 p-2 flex-fill forum">Total:</div>
                            </div>


                            {/* array del producto */}

                            {
                                myCart.map((content, index) => (
                                    <div className="d-flex " key={index}>
                                        <div className="col-sm-8 p-2 flex-fill text-start ">
                                            <img src={product} alt="" width={75} />
                                        </div>
                                        <div className="col-3 p-2 flex-fill center">
                                            <div className="btn-group" >
                                                <button type="button" className="btn btn-outline-dark rounded-circle  p" onClick={() => deleteItemCar(content.quantity, content.uid)}>
                                                    -
                                                </button>
                                                <div className=" width-20-px center">{content.quantity}</div>
                                                <button type="button" className="btn btn-outline-dark rounded-circle" onClick={() => addItemProduct(content.uid)}>+</button>
                                            </div>
                                        </div>
                                        <div className="col-2 p-2 flex-fill center">
                                            <h1 className='gidogu size-25'>$ {(content.totaly).toFixed(2)} </h1>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <p className='text-start gidogu size-40'>¡Mira mas productos!</p>

                        <div className='card-group'>
                            <CardGroup />

                        </div>
                    </div>
                    <div className="col-sm-5 ">
                        {/* calcular costo del producto */}
                        <div className='container heigth-100 border border-2'>
                            {/* <p>Subtotal: $24,550.00 MXN</p> */}
                            <div className="d-flex border-bottom  border-4 pt-3 heigth-25">
                                <p className="col-sm-8  flex-fill text-start gidogu size-64 bg">Total</p>
                                <p className="col-2 flex-fill  center gidogu size-25"> {totalPay.toFixed(2)} MXN</p>
                            </div>

                            <div className='pt-5 pb-5 border-bottom border-4'>
                                <p className='text-start forum size-20'>Impuestos incluidos {"\t\t\t\t\t\t"}
                                    <b>{(totalPay * 0.16).toFixed(2)   }</b>
                                </p>
                                <p className='text-start forum size-20'>Gastos de envío calculados en la caja</p>
                            </div>

                            <div className='container width-100 heigth-250-px center '>
                                <button type="button" className="btn btn-warning width-50 border-black">Warning</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;