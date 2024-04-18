import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar productos"
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

const History = ({ history, onClear }) => {
  return (
    <div>
      <h2>Historial de búsqueda</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>Limpiar historial</button>
    </div>
  );
};

const ProductSearch = () => {
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);

  const handleSearch = (query) => {
    // Realizar la búsqueda de productos
    // Actualizar los resultados
    setResults([...results, query]);

    // Actualizar el historial de búsqueda
    setHistory([...history, query]);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <History history={history} onClear={handleClearHistory} />
      <h2>Resultados de la búsqueda</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;
