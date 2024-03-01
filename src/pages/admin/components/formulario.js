import { Try } from "@mui/icons-material";
import { useState } from "react";
import Swal from "sweetalert2";

function Formulario() {

    const [dragging, setDragging] = useState(false);
    const [files, setFiles] = useState([]);
    const [product, setProduct] = useState();

    const addItemStorage = async () => {

        const formdata = new FormData();
        formdata.append("id", "35<");
        formdata.append("brand", product.brand);
        formdata.append("model", product.model);
        formdata.append("numberPart", product.numberPart);
        formdata.append("description", product.description);
        formdata.append("price", product.price);
        formdata.append("stock", product.stock);
        formdata.append("conditions", product.conditions);
        formdata.append("status", product.status);
        formdata.append("image", files[0],);
        formdata.append("img1", files[0],);
        formdata.append("img2", files[1],);
        formdata.append("img3", files[2],);
        formdata.append("img4", files[3],);

        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
        };


        try {

            // url =  "http://192.168.1.121:3003/Admin/addProduct"

            let response = await fetch('http://192.168.100.71:3003/Admin/addProduct', requestOptions);

            let data = await response.json();

            // console.log("Data", data);

            if (data.status == "success") {
                Swal.fire({
                    icon: "success",
                    title: "success",
                    text: "Se agregó el articulo correctamente!",
                })
            } else {
                Swal.fire({
                    icon: "error",
                    title: "error",
                    text: "No se pudo agregar el producto",
                })
            }
        } catch (error) {

        }
    }

    const handleDragEnter = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        setFiles((prevFiles) => {
            const newFiles = [...prevFiles, ...droppedFiles].slice(0, 4);
            return newFiles;
        });
    };

    const removeImagen = (name) => {
        console.log(name)
        const newCart = files.filter((item) => item.name !== name);
        setFiles(newCart)
        // setMyCart(newcart)
    }

    const handleChange = e => {
        setProduct({
            ...product, [e.target.name]: e.target.value,
        });
    };

    const handleFileInputChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles((prevFiles) => {
            const newFiles = [...prevFiles, ...selectedFiles].slice(0, 4);
            return newFiles;
        });
    };


    return (
        <>
            <div className="heigth-100-vh container center pt-4 bg-ededede overflow-hidden overflow-scroll ">

                <div className=''>
                    <div className='container width-95  mt-5 '>
                        <h2>Añadir nuevo Item a Almacen</h2>
                        {/*  */}
                        <form class="row">
                            <div class="col-12">
                                <label for="inputModelo" class="form-label">Marca</label>
                                <input type="text" class="form-control" id="inputModelo" placeholder="Siemens" name='brand' onChange={handleChange} />
                            </div>
                            <div class="col-md-6">
                                <label for="inputIdentificador4" class="form-label">Identificador</label>
                                <input type="Identificador" class="form-control" id="inputIdentificador4" name='numberPart' placeholder='6SN1123-1AA00-0DA1' onChange={handleChange} />
                            </div>
                            <div class="col-md-6">
                                <label for="inputStock4" class="form-label">Cantidad en Almacen</label>
                                <input type="text" class="form-control" id="inputStock4" name='stock' placeholder='4' onChange={handleChange} />
                            </div>
                            <div class="col-md-4">
                                <label for="inputMarca4" class="form-label">Modelo</label>
                                <input type="text" class="form-control" id="inputMarca4" name='model' placeholder='SIMODRIVE LT-MODUL INT 80A' onChange={handleChange} />
                            </div>


                            <div class="col-md-4">
                                <label for="inputIdentificador4" class="form-label">Precio</label>
                                <input type="Identificador" class="form-control" id="inputIdentificador4" name='price' placeholder='$24,000.00' onChange={handleChange} />
                            </div>
                            <div class="col-md-4">
                                <label for="inputState" class="form-label">Condiciones de la pieza</label>
                                <select id="inputState" name="conditions" class="form-select" onChange={handleChange}   >
                                    <option selected>Seleccionar...</option>
                                    <option name="nuevo" value="nuevo">Nuevo</option>
                                    <option name="usado" value="usado">Usado</option>
                                    <option name="refaccion" value="refaccion">Para refacción</option>
                                    <option name="semi-nuevo" value="semi-nuevo">Semi-nuevo</option>
                                </select>
                            </div>

                            <div class="col-12">
                                <label for="inputStock" class="form-label">Descripción</label>
                                {/* <textarea rows="5" cols="50"></textarea> */}
                                <textarea name="description" type="text" class="form-control" id="inputStock" placeholder="El Siemens 3TF47 es un contactor de motor trifásico IEC. Se utiliza para el control de motores eléctricos." onChange={handleChange} />
                            </div>

                            <div class="col-12">
                                <label for="inputState" class="form-label">Estado</label>
                                <select id="inputState" name="status" class="form-select" onChange={handleChange}  >
                                    <option selected>Seleccionar...</option>
                                    <option name="1">Disponible</option>
                                    <option name="0">No Disponible</option>
                                </select>
                            </div>

                            {/* form  images*/}

                            <div className='container mt-3'>


                                <label id="drop-area" className='mt-2'>
                                    <form class="my-form "

                                        onDragEnter={handleDragEnter}
                                        onDragLeave={handleDragLeave}
                                        onDragOver={handleDragOver}
                                        onDrop={handleDrop}
                                    >



                                        <>
                                            {/* <input type="file" id="fileElem" multiple accept="image/*" onchange={handleFileInputChange} /> */}
                                            <input type="file" id="fileElem" multiple accept="image/*" onChange={handleFileInputChange} />

                                        </>
                                        <div className="row">
                                            {files && files.length > 0 ? (
                                                files.map((file) => (
                                                    <div className="col" key={file.name}>
                                                        <img
                                                            src={URL.createObjectURL(file)}
                                                            alt={file.name}
                                                            style={{ maxWidth: '100px', maxHeight: '100px', margin: '1px' }}
                                                            onClick={() => removeImagen(file.name)}
                                                        />
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="">
                                                    <p className="">Selecciona 4 imagenes que represente las Condiciones del producto</p>
                                                    <label class="button" htmlFor="fileElem">Select some files</label>
                                                </div>
                                            )}
                                        </div>

                                    </form>
                                </label>
                                <button type="button" class="btn btn-outline-primary mt-3  width-100" onClick={() => addItemStorage()}>Agregar</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Formulario;