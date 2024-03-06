import { Route, Routes } from "react-router-dom";

function PrivateUser() {
    return (
        <Routes>
            <Route path="user/*" element={<div></div>} />
        </Routes>
    );
}

export default PrivateUser;