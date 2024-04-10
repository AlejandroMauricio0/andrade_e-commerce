import { useState } from "react";
import LocationForm from "../../checkout/components/form_location";
import CardLocation from "../components/card_locations";

function LocationHome() {

    const [addLocation, setNewLocation] = useState(true);

    const NewLocation = () => {
        setNewLocation(!addLocation)
    }

    return (
        <>
            <div className="container">
                <div className="container text-start m-2 pb-4">
                    <b className="text-end">
                        Direcciones
                    </b>
                </div>
                {
                    addLocation ?
                        <>
                            <CardLocation />
                            <div className="ps-3 p-3 text-start">
                                <button type="button" class="btn btn-outline-primary" onClick={() => NewLocation()}>
                                    <i class="fa-solid fa-plus"></i>
                                    {' Añadir nueva dirección'}
                                </button>
                            </div>
                        </>
                        :
                        <>
                            <div className="bg-ededede center heigth-80-vh overflow-hidden overflow-scroll">
                                <LocationForm />
                                <br />

                                <button type="button" class="btn btn-danger" onClick={() => NewLocation()}>Cancelar</button>
                            </div>
                            <div className="text-start">
                            </div>


                        </>
                }
            </div>
        </>
    );
}

export default LocationHome;