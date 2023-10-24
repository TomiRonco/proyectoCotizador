import React, { useState } from "react";
import UseApi from "./hook/UseApi";
import Result from "../result/Result";

const InitialValues = {
  amount: 0,
  date: "",
  results: null,
};

const FormCalculator = () => {
  const [data, setData] = useState(InitialValues);

  const amountHandler = (event) => {
    setData({ ...data, amount: event.target.value });
  };

  const dateHandler = (event) => {
    setData({ ...data, date: event.target.value });
  };

  const calculateButtonHandler = async () => {
    try {
      const { amount, date } = data;
      const resultados = await UseApi(amount, date);
      setData({ ...data, results: resultados });
    } catch (error) {
      console.log("Error al llamar a la API", error);
    }
  };

  return (
    <form className="row w-35">
      <div className="col-6">
        <input
          className="form-control"
          type="number"
          placeholder="$ Amount"
          onChange={amountHandler}
          value={data.amount}
        />
      </div>
      <div className="col-6">
        <input
          className="form-control"
          type="date"
          onChange={dateHandler}
          value={data.date}
        />
      </div>
      <div className="col-12 d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={calculateButtonHandler}
        >
          Calculator
        </button>
      </div>
      {data.results && data.results.monto_en_dolares && <Result results={data.results} />}
    </form>
  );
};

export default FormCalculator;
