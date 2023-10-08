import React from "react";

const FormCalculator = () => {
  return (
    <form className="row w-25">
      <div className="col-6">
        <input className="form-control" type="number" placeholder="$ Amount" />
      </div>
      <div className="col-6">
        <input className="form-control" type="date" />
      </div>
      <div className="col-12 d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-primary mt-3">
          Calculator
        </button>
      </div>
    </form>
  );
};

export default FormCalculator;
