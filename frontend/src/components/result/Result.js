import './Result.css';

const Result = ({ results }) => {
  return (
    <div className="card">
      <h2 className="title">Resultados</h2>
      <p className="result">Monto en dólares: {results.monto_en_dolares}</p>
      <p className="result">IPC: {results.ipc}</p>
      <p className="result">UVA: {results.uva}</p>
      <p className="result">Promedio: {results.promedio}</p>
    </div>
  );
};

export default Result;
