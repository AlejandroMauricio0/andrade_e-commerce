function CardLocation() {
    return (
        <>
            <div className="container">
                <div className="border border-2 rounded">
                    <div className="p-3">
                        <div class="d-flex">
                            <div class="p-1 text-start">
                                <span class="material-symbols-outlined">
                                    home
                                </span>
                            </div>
                            <div class="ps-2 flex-fill text-start">
                                {'C.P. 29016'}
                                <br />
                                {'Manuel Carrasco 3 - Linda Vista Shanka - Tuxtla Gutiérrez, Chiapas, Mauricio Alejandro Ocampo Lopez - 9614292274'}
                            </div>


                            <div class="p-2 flex-fill text-end">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardLocation;