function AccountDetails() {
    return (
        <>
            <div className="container">
                <div className="border border-2 rounded">
                    <div className="p-3">
                        <div class="d-flex">
                            <div class="p-2 text-start">
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div class="p-2 flex- fill text-start">
                                {'alex.mauricio12@hotmail.com'}
                            </div>

                        </div>
                    </div>
                    <div className="p-3">
                        <div class="d-flex">
                            <div class="p-2 text-start">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div class="p-2 flex- fill text-start">
                                {'+52 9614292274'}
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className="text-start ps-3 pt-3">
                <button type="button" class="btn btn-outline-primary">Editar datos</button>
            </div>
        </>
    );
}

export default AccountDetails;