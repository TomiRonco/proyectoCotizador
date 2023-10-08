import React, { useState } from "react";

const FormCalculator = () => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <form className="row w-35">
      <div className="col-6">
        <input
          className="form-control"
          type="number"
          placeholder="$ Amount"
          onChange={amountHandler}
          value={amount}
        />
      </div>
      <div className="col-6">
        <input
          className="form-control"
          type="date"
          onChange={dateHandler}
          value={date}
        />
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
