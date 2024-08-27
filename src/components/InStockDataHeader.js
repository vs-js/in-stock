import React from "react";
import "../styles/InStockDataHeader.scss";
import search from "../assets/images/Icons/search-24px.svg";

const InStockDataHeader = ({ title, btnText }) => {
  return (
    <div className="in-stock-data-header">
      <h1 className="in-stock-data-header__title">{title}</h1>
      <div className="in-stock-data-header__controls">
        <div className="in-stock-data-header__controls__search">
          <input
            className="in-stock-data-header__controls__search__input"
            type="text"
            placeholder="Search..."
          />
          <img src={search} alt="search warehouses" />
        </div>
        <button className="in-stock-data-header__controls__button">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default InStockDataHeader;
