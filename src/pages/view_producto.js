import { useState } from "react";
import Barleft from "../components/bar_left";
import Description from "../components/description";
import Table from "../components/table";
import VisorImage from "../components/visor_image";
import { useLocation } from "react-router-dom";


function ViewProduct({ myCart, setMyCart }) {

  const location = useLocation();

  // estado original
  const [changeImg, setChangeImg] = useState("");


  // get data product por medio de su state
  const content = location.state;

  console.log(content.state);
  return (
    <>
      <div className="text-center mt-4">
        <div className="row">
          <div className="col-sm-6 ">
            <div className="row">
              <div className="col-sm-2 bg-yellow">
                <Barleft setChangeImg={setChangeImg} content={content} />
              </div>

              <div className="col-sm-9 bg-red bg-e center">

                <div className="border border-2  bg-blue ">
                  <VisorImage changeImg={changeImg} />
                </div>
                <Table content={content} />
              </div>
            </div>
          </div>
          <div className="col-sm-6 bg-orange d">
            <Description myCart={myCart} setMyCart={setMyCart} content={content} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProduct;