import { useState } from "react";

function ProductDesc() {
  const [val, setVal] = useState(0);

  return (
    <div>
      <small className="text-uppercase text-muted" style={{ fontSize: "10px" }}>
        sneaker company
      </small>
      <h1 className="text-capitalize fw-bolder w-75 my-3 fs-2 ">
        fall limited edition sneakers
      </h1>
      <p className="text-muted mb-3 my-lg-5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="w-100 d-flex align-items-center justify-content-between mb-3 my-lg-5">
        <p className="fw-bold fs-3">
          $125.00
          <span className="badge bg-dark text-light ms-3">50%</span>
        </p>
        <span className="text-decoration-line-through ms-3 text-muted">
          $250.00
        </span>
      </div>
      {/* button  */}
      <div className="row my-lg-4">
        <div
          className="col-12 col-md-6 d-flex align-items-center mb-3 bg-gray"
          style={{ backgroundColor: "#f7f8fd" }}
        >
          <button
            onClick={() => {
              val > 0 ? setVal((prevVal) => prevVal - 1) : setVal(0);
            }}
            className="w-25 btn text-primary me-3 bg-gray"
          >
            -
          </button>
          <input
            type="number"
            value={val}
            className="form-control text-center text-black w-50 border-0 fw-bold"
            style={{ backgroundColor: "#f7f8fd", fontSize: "18px" }}
            readOnly
          />
          <button
            onClick={() => {
              setVal((prevVal) => prevVal + 1);
            }}
            className="w-25 btn text-primary ms-3"
          >
            +
          </button>
        </div>
        <div className="col-12 col-md-6">
          <button className="btn bg-primary fw-bold text-black w-100">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDesc;
