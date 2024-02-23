function Table({content}) {
    
    return (
        <>
            <div className="width-100 mt-4 ">
                <div className="container-fluid">
                    <div className="row  border border-2 rounded">
                        <div className="col-6 col-sm-4 text-start width-50 gidogu size-25">Fase del producto</div>
                        <div className="col-6 col-sm-4 center-rigth width-50 forum size-15">Obsoleto</div>
                    </div>
                    <div className="row  border border-2 rounded bg-blue color-white">
                        <div className="col-6 col-sm-4 text-start width-50 gidogu size-25">Dimensiones (cm)</div>
                        <div className="col-6 col-sm-4 center-rigth width-50 forum size-15">5,00 x 29,00 x 21,70</div>
                    </div>
                    <div className="row  border border-2 rounded ">
                        <div className="col-6 col-sm-4 text-start width-50 gidogu size-25">Peso (kg)</div>
                        <div className="col-6 col-sm-4 center-rigth width-50 forum size-15">1.51</div>
                    </div>
                    <div className="row  border border-2 rounded bg-blue color-white">
                        <div className="col-6 col-sm-4 text-start width-50 gidogu size-25">ID:</div>
                        <div className="col-6 col-sm-4 center-rigth width-50 forum size-15 float-end ">{content.id}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Table;