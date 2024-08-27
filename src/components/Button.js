import React from "react";
import "../styles/Button.scss";

const Button = ({ text, selected, onClick }) => {
  return (
    <button
      className={`navbar_btn ${
        selected ? "navbar_btn--selected" : "navbar_btn--not-selected"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
