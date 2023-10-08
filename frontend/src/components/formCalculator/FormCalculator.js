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

  const calculateButtonHandler = async () => {
    try {
      const data = { amount, date };

      const response = await fetch("/api/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("No se pudo obtener respuesta de la API.");
      }

      const resultado = await response.json();

      console.log(resultado);
    } catch (error){
      console.error("Error al realizar la solicitud:", error);
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
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={calculateButtonHandler}
        >
          Calculator
        </button>
      </div>
    </form>
  );
};

export default FormCalculator;
