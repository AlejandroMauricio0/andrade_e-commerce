function Filter() {
    return (
        <>
            <div className="width-100 heigth-0 pr-4  border border-3 mt-5 mb-5">

                <div className="width-95 text-start ms-2">
                    <div className="bg-re d">
                        <h2 className="border-b ">Filter</h2>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"  />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Semi-Nuevo
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                            <label className="form-check-label" htmlFor="exampleRadios2">
                                Usado
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                            <label className="form-check-label" htmlFor="exampleRadios3">
                                Para Piezas
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filter;