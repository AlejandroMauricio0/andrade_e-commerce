import { useState } from 'react';

// import Zoom from "react-img-zoom";
// import img1 from '../assets/images/simodrive/1.jpg'
import IMG1 from 'C:/Users/alexm/Pictures/Screenshots/Captura de pantalla 2024-01-05 211904.png'

function VisorImage({ changeImg }) {

    const [zoom, setZoom] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setPosition({ x, y });
    };



    return (

        <>

            <div className='center'>


                <div className=' bg-blue'>
                    <div
                        style={{
                            backgroundSize:'cover',
                            overflow: 'hidden',
                            width: '100%', // Ancho de la imagen
                            height: '50vh', // Alto de la imagen
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setZoom(true)}
                        onMouseLeave={() => setZoom(false)}
                    >
                        <img
                            src={changeImg}
                            alt="Descripción de la imagen"
                            style={{
                                width: '100%',
                                height: '100%',
                                transform: `scale(${zoom ? 4 : 1})`,
                                transformOrigin: `${position.x * 100}% ${position.y * 100}%`,
                                transition: 'transform 0.2s',
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default VisorImage;