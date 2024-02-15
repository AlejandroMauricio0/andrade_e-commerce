import Zoom from "react-img-zoom";
import simodrive from '../assets/images/simodrive/1.jpg'
function VisorImage() {
    return (

        <Zoom
            img={simodrive}
            zoomScale={3}
            width={400}
            height={400}
        />
    );
}

export default VisorImage;