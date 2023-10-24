const UseApi = async (amount, date) => {
  try {
    const data = {
      amount,
      date,
    };

    const response = await fetch("http://localhost:8000/api/calcular/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("No se pudo obtener respuesta de la API.");
    }

    const resultados = await response.json();
    return resultados;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
    throw error;
  }
};

export default UseApi;
