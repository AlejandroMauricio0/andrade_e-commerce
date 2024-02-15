import Barleft from "../components/bar_left";
import Table from "../components/table";
import VisorImage from "../components/visor_image";

function ViewProduct() {
  return (
    <>
      <div class="text-center mt-4">
        <div class="row">
          <div class="col-sm-6 ">
            <div className="row">

              <div className="col-sm-3 bg-y ellow">
                <Barleft />
              </div>

              <div className="col-sm-8 bg-e center border border-2">
                <VisorImage />
              </div>
            </div>
            <br />
            <div className="container-sm bg-blue width-70 ">
              <Table />
            </div>
          </div>
          <div class="col-sm-6 bg-red">
            col
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProduct;