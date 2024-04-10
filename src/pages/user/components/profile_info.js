function ProfileUSer() {
    return (
        <>
            <div className="container">
                <div className="border border-2 rounded">
                    <div className="p-3">
                        <div class="d-flex">
                            <div class="p-2 text-start">
                                <i class="fa-regular fa-user"></i>
                            </div>
                            <div class="p-2 flex- fill text-start">
                                {'Mauricio Alejandro Ocampo Lopez'}
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

export default ProfileUSer;