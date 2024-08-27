import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Warehouses from "./components/Warehouses";
const App = () => {
  const [selectedButton, setSelectedButton] = useState("Warehouses");
  return (
    <div className="instock__main">
      <Navbar
        setSelectedButton={setSelectedButton}
        selectedButton={selectedButton}
      />
      <div className="instock__main__data">
        <Warehouses selectedButton={selectedButton} />
      </div>
    </div>
  );
};

export default App;
