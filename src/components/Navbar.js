import React, { useState } from "react";
import logo from "../assets/images/Logo/InStock-Logo.svg";
import Button from "./Button";
import "../styles/Navbar.scss";

const Navbar = () => {
  const [selectedButton, setSelectedButton] = useState("Warehouses");

  return (
    <div className="navbar__main">
      <div className="navbar__main__container">
        <img src={logo} alt="inStock logo" />
        <div>
          <Button
            text={"Warehouses"}
            selected={selectedButton === "Warehouses"}
            onClick={() => setSelectedButton("Warehouses")}
          />
          <Button
            text={"Inventory"}
            selected={selectedButton === "Inventory"}
            onClick={() => setSelectedButton("Inventory")}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
