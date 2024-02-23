import Zoom from "react-img-zoom";
import img1 from '../assets/images/simodrive/1.jpg'



function VisorImage({ changeImg }) {

    // console.log("visor= ", changeImg);

    return (

        <div className="border border-2">

            <Zoom
                key={changeImg}
                
                img={changeImg}
                // img={'http://192.168.1.121:3000/Admin/viewImage/' + `${changeImg}`}
                // img={'http://192.168.1.121:3000/Admin/viewImage/' + `${changeImg}`}
                zoomScale={3}
                    width={500}
                    height={400}
            />
        </div>
    );
}

export default VisorImage;