import { useState } from "react";
import Barleft from "../components/bar_left";
import Description from "../components/description";
import Table from "../components/table";
import VisorImage from "../components/visor_image";
import { useLocation } from "react-router-dom";


function ViewProduct({ myCart, setMyCart }) {

  const location = useLocation();

  const [changeImg, setChangeImg] = useState("");


  // get data product

  const content = location.state;

  console.log(content.state);
  return (
    <>
      <div className="text-center mt-4">
        <div className="row">
          <div className="col-sm-6 ">
            <div className="row">

              <div className="col-sm-3 bg-y ellow">
                <Barleft setChangeImg={setChangeImg} content={content} />
              </div>

              <div className="col-sm-8 bg-e center">

                <div className="border border-2">
                  <VisorImage changeImg={changeImg} />
                </div>
                <Table />
              </div>
            </div>
            <br />

          </div>
          <div className="col-sm-6 bg-re d">
            <Description myCart={myCart} setMyCart={setMyCart} content={content}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProduct;