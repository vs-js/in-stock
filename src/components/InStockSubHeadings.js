import React from "react";
import "../styles/InStockSubHeadings.scss";
import sorting from "../assets/images/Icons/sort-24px.svg";
import warehouseData from "../data/warehouses.json";

const subHeading = [
  "Warehouse",
  "Address",
  "Contact Name",
  "Contact Information",
  "Action",
];

const InStockSubHeadings = () => {
  return (
    <div className="sub-heading-data-main">
      {/* Header with full-width background */}
      <div className="sub-heading-data-main__header">
        <div className="sub-heading-data-main__header-content">
          {subHeading.map((data, index) => (
            <div
              key={index}
              className={`sub-heading-item heading-${index} sub-heading-data-main__header-content__headers`}
            >
              <h5>{data}</h5>
              {index < 4 && <img src={sorting} alt="sorting" />}
            </div>
          ))}
        </div>
      </div>

      {/* Warehouse Data Rows */}
      <div className="sub-heading-data-main__rows-container">
        <div className="sub-heading-data-main__rows">
          {warehouseData.map((warehouse) => (
            <div key={warehouse.id} className="warehouse-row ">
              <div className="sub-heading-item warehouse-name heading-0">
                <h6>{warehouse.warehouse_name}</h6>
              </div>
              <div className="sub-heading-item address heading-1">
                {warehouse.address}, {warehouse.city}, {warehouse.country}
              </div>
              <div className="sub-heading-item contact-name heading-2">
                {warehouse.contact_name} ({warehouse.contact_position})
              </div>
              <div className="sub-heading-item contact-info heading-3">
                Phone: {warehouse.contact_phone} <br />
                Email: {warehouse.contact_email}
              </div>
              <div className="sub-heading-item action heading-4">
                <img src={sorting} alt="Sort Icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InStockSubHeadings;
