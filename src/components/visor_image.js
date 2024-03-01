import Zoom from "react-img-zoom";
// import img1 from '../assets/images/simodrive/1.jpg'
import IMG1 from 'C:/Users/alexm/Pictures/Screenshots/Captura de pantalla 2024-01-05 211904.png'

function VisorImage({ changeImg }) {


    return (

        <div className="border border-2"  >

            <Zoom
                key={changeImg}
                img={changeImg}
                zoomScale={3}
                width={500}
                height={400}

            />
        </div>
    );
}

export default VisorImage;