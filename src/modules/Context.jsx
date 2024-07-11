import ProductDesc from "./ProductDesc";
import ProductsSlider from "./ProductsSlider";

function Context() {
  return (
    <div className="container mx-auto p-md-5">
      <div className="row">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
          <ProductsSlider />
        </div>
        <div className="col-12 col-lg-6" style={{ minHeight: "400px" }}>
          <ProductDesc />
        </div>
      </div>
    </div>
  );
}

export default Context;
