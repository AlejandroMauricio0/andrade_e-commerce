import { useEffect } from "react";

import { useNavigate } from 'react-router-dom'

function Loading() {

    const navigate = useNavigate();


    const load = () => {
        setTimeout(() => {
            navigate('../dashboard')
        }, 1000);
    };

    useEffect(() => {
        load();
    }, []);

    return (
        <>
            <div className="cssload-container">
                <ul className="cssload-flex-container">
                    <li>
                        <span className="cssload-loading cssload-one"></span>
                        <span className="cssload-loading cssload-two"></span>
                        <span className="cssload-loading-center"></span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Loading;
