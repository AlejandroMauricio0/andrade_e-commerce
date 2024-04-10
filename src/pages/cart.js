import { Fragment, useEffect, useState } from 'react';
import product from '../assets/images/simodrive/1.jpg'
import CardGroup from '../components/card_group';
import Swal from 'sweetalert2';
import img1 from '../assets/images/simodrive/1.jpg'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


// or via CommonJS

function Cart({ myCart, setMyCart }) {

    // const notify = () => toast.success("El Carrito esta vacio, añada un producto");

    const [totalPay, setTotalPay] = useState(0);
    const navigate = useNavigate();



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
            if (product.uid === uid && product.quantity < product.stock) {
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
                title: "Estas seguro?",
                text: "No podrás deshacer esto!",
                icon: "warning",
                // showCancelButton: true,
                showDenyButton: true,
                confirmButtonColor: "#3085d6",
                // cancelButtonColor: "#d33",
                confirmButtonText: "Si, eliminarlo!",
                denyButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Eliminado!",
                        text: "Tu producto ha sido eliminado.",
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

    const cartValidate = () => {
        console.log("se esta ejecutando", myCart.length);
        if (myCart.length == 0) {
            const Toast = Swal.mixin({
                toast: true,
                position: "center",
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
            });
            Toast.fire({
                icon: "success",
                title: "Preparando todo para tu compra"
            });
            navigate('../checkout');

        } else {
            //
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
            {/* {
                localStorage.getItem('section_token') ? */}
            <div className="mt-2 ">
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
                            <div className='container heigth-82 overflow-hidden overflow-scroll '>

                                {
                                    myCart.map((content, index) => (

                                        <div className="d-flex border-bottom " key={index}>
                                            <div className="col-sm-2 -red center flex-fill text-start ">
                                                <img src={img1} alt="" width={70} />
                                            </div>
                                            <div className='col-6 center'>
                                                <div className='container-xxl'>
                                                    <div className='text-start gidogu '>{content.name}</div>
                                                    <div className=' text-start m-0  gidogu size-24'>
                                                        {content.price}
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-3 flex-fil l center">
                                                <div className="btn-group" >
                                                    <button type="button" className="btn btn-outline-dark rounded-circle  p" onClick={() => deleteItemCar(content.quantity, content.uid)}>
                                                        -
                                                    </button>
                                                    <div className=" width-20-px center">{content.quantity}</div>
                                                    <button type="button" className="btn btn-outline-dark rounded-circle" onClick={() => addItemProduct(content.uid)}>+</button>
                                                </div>
                                            </div>
                                            <div className="col-2 flex-fill center">
                                                <h1 className='gidogu size-25'>$ {(content.totaly).toFixed(2)} </h1>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
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
                                <p className="col-sm-8  flex-fill text-start gidogu size-64 ">Total</p>
                                <p className="col-2 flex-fill  center gidogu size-25"> {totalPay.toFixed(2)} MXN</p>
                            </div>

                            <div className='pt-5 pb-5 border-bottom border-4'>
                                {/* <p className='text-start forum size-20'>Impuestos incluidos {"\t\t\t\t\t\t"}
                                    <b>{(totalPay * 0.16).toFixed(2)}</b>
                                </p> */}
                                {/* <p className='text-start forum size-20'>Los Gastos y Envios seran acordados</p> */}
                                <p className='text-start forum size-20'>Los términos relativos a los gastos y envíos serán objeto de acuerdo mutuo.</p>
                            </div>

                            <div className='container width-100 heigth-250-px center '>
                                <button type="button" className="btn btn-warning width-50 border-black" onClick={() => cartValidate()}>Continuar compra</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* :
                     <>
                         <div className='container heigth-80-vh center'>
                             <h2>Inicia sesion para poder comprar tu carrito</h2>
                         </div>
                     </>
             } */}
        </>
    );
}

export default Cart;