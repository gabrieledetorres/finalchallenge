import React, { useState, useEffect } from "react";

export default function App() {
  const [estado, setEstado] = useState(true);
  return (
    <div>
      {estado && <Mode />}
      <button onClick={() => setEstado(!estado)}>Troca</button>
      {!estado && <h1>Dark Mode</h1>}
    </div>
  );
}

function Mode() {
  useEffect(() => {
    document.body.style.backgroundColor = "#fdfcdc";
    document.body.style.color = "black";
    return () => {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    };
  });

  return (
    <div>
      <h1>Funciona;D</h1>
    </div>
  );
}
