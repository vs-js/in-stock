import React from "react";
import "../styles/InStockSubHeadings.scss";
import sorting from "../assets/images/Icons/sort-24px.svg";
import inventoryData from "../data/inventory.json";
import warehouseData from "../data/warehouses.json";
import arrow from "../assets/images/Icons/chevron_right-24px.svg";
import deleteIcon from "../assets/images/Icons/delete_outline-24px.svg";
import editIcon from "../assets/images/Icons/edit-24px.svg";

// Define table headers
const subHeading = [
  "INVENTORY ITEM",
  "CATEGORY",
  "STATUS",
  "QTY",
  "WAREHOUSE",
  "Action",
];

const InventoryData = () => {
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
      <tbody className="warehouse-table__inventory">
        {inventoryData.map((inventory) => (
          <tr key={inventory.id}>
            <td>
              <div className="warehouse_name">
                <h6>{inventory.item_name}</h6>
                <img src={arrow} alt="arrow" />
              </div>
            </td>
            <td>
              <h5>{inventory.category}</h5>
            </td>
            <td>
              <h5
                className={
                  inventory.status === "In Stock"
                    ? "warehouse-table__in-stock"
                    : "warehouse-table__out-of-stock"
                }
              >
                {inventory.status}
              </h5>
            </td>
            <td>
              <h5>{inventory.quantity}</h5>
            </td>
            <td>
              <h5>{inventory.warehouse}</h5>
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

export default InventoryData;
