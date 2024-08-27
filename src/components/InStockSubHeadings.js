import React from "react";
import "../styles/InStockSubHeadings.scss";
import sorting from "../assets/images/Icons/sort-24px.svg";
import warehouseData from "../data/warehouses.json";
import arrow from "../assets/images/Icons/chevron_right-24px.svg";
import deleteIcon from "../assets/images/Icons/delete_outline-24px.svg";
import editIcon from "../assets/images/Icons/edit-24px.svg";

// Define table headers
const subHeading = [
  "Warehouse",
  "Address",
  "Contact Name",
  "Contact Information",
  "Action",
];

const InStockSubHeadings = () => {
  return (
    <table className="warehouse-table">
      <thead>
        <tr>
          {subHeading.map((heading, index) => (
            <th key={index}>
              <div className="warehouse-table__header">
                <h4> {heading}</h4>
                {index < 4 && (
                  <img src={sorting} alt="sort icon" className="sort-icon" />
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {warehouseData.map((warehouse) => (
          <tr key={warehouse.id}>
            <td>
              <div className="warehouse_name">
                <h6>{warehouse.warehouse_name}</h6>
                <img src={arrow} alt="arrow" />
              </div>
            </td>
            <td>
              <h5>
                {warehouse.address}, {warehouse.city}, {warehouse.country}
              </h5>
            </td>
            <td>
              <h5>{warehouse.contact_name}</h5>
            </td>
            <td>
              <h5>{warehouse.contact_phone}</h5>
              <h5> {warehouse.contact_email}</h5>
            </td>
            <td>
              <div className="warehouse-table__action">
                <img src={deleteIcon} alt="sort icon" className="sort-icon" />
                <img src={editIcon} alt="sort icon" className="sort-icon" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InStockSubHeadings;
