import React, { useEffect } from "react";
import "./styles.css";

const PokeManList = () => {
  const getPokemanList = () => {};
  useEffect(() => {
    getPokemanList();
  }, []);
  return <></>;
};

export default function App() {
  return (
    <div className="App">
      <h1>Pokeman App</h1>
      <PokeManList />
    </div>
  );
}
