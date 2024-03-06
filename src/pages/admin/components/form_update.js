import { useState } from "react";
import { useLocation } from "react-router-dom";

function FormUpDate() {


    const location = useLocation();
    const content = location.state;

    console.log("contenido por state", content);



    const [dragging, setDragging] = useState(false);
    // const [files, setFiles] = useState([]);
    const [product, setProduct] = useState(content);

    const [files, setFiles] = useState([
        { name: `http://192.168.1.121:3003/Admin/viewImage/${content.img0}` },
        { name: `http://192.168.1.121:3003/Admin/viewImage/${content.img1}` },
        { name: `http://192.168.1.121:3003/Admin/viewImage/${content.img2}` },
        { name: `http://192.168.1.121:3003/Admin/viewImage/${content.img3}` },
    ]);
    const addItemStorage = async () => {
        alert("estoy ejecutando un post")
        try {
            let response = await fetch('http://192.168.1.121:3000/Admin/addProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    'brand': '',
                    'model': ''
                }),
            })

            console.log("response", response.status)
        } catch (error) {
            console.error(error)
        }
    }


    console.log()

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
    }

    const handleChange = e => {
        setProduct({
            ...product, [e.target.name]: e.target.value,
        });
    };



    const handleFileInputChange = (e) => {
        const selectedFiles = Array.from(e.target.files);

        setFiles((prevFiles) => {
            // Liberar las URLs creadas anteriormente solo para los archivos que están siendo reemplazados
            prevFiles.slice(-selectedFiles.length).forEach((file) => URL.revokeObjectURL(file.name));

            // Crear nuevas URLs para los archivos seleccionados y asignar un nombre
            const newFiles = [
                ...prevFiles,
                ...selectedFiles.map((file, index) => ({
                    // name: `${prevFiles}`,
                    name: URL.createObjectURL(file),
                })),
            ].slice(0, 4);

            return newFiles;
        });

    };


    return (
        <>
            <div className="heigth-100-vh container center pt-4 bg-ededede overflow-hidden overflow-scroll ">

                <div className=''>
                    <div className='container width-95  mt-5 '>
                        <h2>Actualizar informacion </h2>
                        <form class="row">
                            <div class="col-12">
                                <label for="inputModelo" class="form-label">Marca</label>
                                {/* <input type="text" class="form-control" id="inputModelo" placeholder="Siemens" name='marca' onChange={handleChange} value={"nj"}/>  */}
                                <input type="text" class="form-control" id="inputModelo" placeholder="Siemens" name='brand' value={product.brand} />
                                {/* <input type="text" class="list-group-item fw-bolde"  placeholder='Curp:' maxLength="18" value={product.name}></input> */}
                            </div>
                            <div class="col-md-6">
                                <label for="inputIdentificador4" class="form-label">Identificador</label>
                                <input type="Identificador" class="form-control" id="inputIdentificador4" name='id' value={product.id} onChange={handleChange} />
                            </div>
                            <div class="col-md-6">
                                <label for="inputStock4" class="form-label">Cantidad en Almacen</label>
                                <input type="text" class="form-control" id="inputStock4" name='stock' placeholder='4' value={product.stock} onChange={handleChange} />
                            </div>
                            <div class="col-md-4">
                                <label for="inputMarca4" class="form-label">Modelo</label>
                                <input type="text" class="form-control" id="inputMarca4" name='model' value={product.model} placeholder='SIMODRIVE LT-MODUL INT 80A' onChange={handleChange} />
                            </div>


                            <div class="col-md-4">
                                <label for="inputIdentificador4" class="form-label">Precio</label>
                                <input type="Identificador" class="form-control" id="inputIdentificador4" name='price' placeholder='$24,000.00' value={product.price} onChange={handleChange} />
                            </div>
                            <div class="col-md-4">
                                <label for="inputState" class="form-label">Condiciones de la pieza</label>
                                <select id="inputState" name="conditions" class="form-select" onChange={handleChange} value={product.conditions} >
                                    <option selected>Seleccionar...</option>
                                    <option name="nuevo" value="nuevo">Nuevo</option>
                                    <option name="usado" value="usado">Usado</option>
                                    <option name="refaccion" value="refaccion">Para refacción</option>
                                    <option name="semi-nuevo" value="semi-nuevo">Semi-nuevo</option>
                                </select>
                            </div>

                            <div class="col-12">
                                <label for="inputStock" class="form-label">Descripción</label>
                                <textarea name="description" type="text" class="form-control" id="inputStock" placeholder="El Siemens 3TF47 es un contactor de motor trifásico IEC. Se utiliza para el control de motores eléctricos." onChange={handleChange} value={product.description} />
                            </div>

                            <div class="col-12">
                                <label for="inputState" class="form-label">Estado</label>
                                <select id="inputState" name="status" class="form-select" onChange={handleChange} value={product.status} >
                                    <option selected>Seleccionar...</option>
                                    <option name="true" value={1}>Disponible</option>
                                    <option name="false" value={0}>No Disponible</option>
                                </select>
                            </div>






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
                                                            // src={URL.createObjectURL(file)}
                                                            // src={`http://192.168.1.121:3003/Admin/viewImage/${file.name}`}
                                                            src={file.name}
                                                            alt={file.name}
                                                            style={{ maxWidth: '100px', maxHeight: '100px', margin: '1px' }}
                                                            onClick={() => removeImagen(file.name)}
                                                        />
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="">
                                                    <p className="">Selecciona 4 imagenes que Remplazaran a las fotos anteriores</p>
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

export default FormUpDate;