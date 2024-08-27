import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Warehouses from "./components/Warehouses";
const App = () => {
  return (
    <div className="instock__main">
      <Navbar />
      {/* <div className="instock__main__data">
        <Warehouses />
      </div> */}
    </div>
  );
};

export default App;
