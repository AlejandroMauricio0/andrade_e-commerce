import Zoom from "react-img-zoom";
import simodrive from '../assets/images/simodrive/1.jpg'
function VisorImage({ changeImg }) {

    // console.log("visor= ", changeImg);

    return (

        <div className="border border-2">

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