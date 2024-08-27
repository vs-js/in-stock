import React from "react";
import InStockDataHeader from "./InStockDataHeader";
import InStockSubHeadings from "./InStockSubHeadings";
import InventoryData from "./InventoryData";

const Warehouses = ({ selectedButton }) => {
  return (
    <div>
      <InStockDataHeader
        title={selectedButton === "Warehouses" ? "Warehouses" : "Inventory"}
        btnText={
          selectedButton === "Warehouses"
            ? "+ Add New Warehouse"
            : "+ Add New Inventory"
        }
      />
      {selectedButton === "Warehouses" ? (
        <InStockSubHeadings selectedButton={selectedButton} />
      ) : (
        <InventoryData selectedButton={selectedButton} />
      )}
    </div>
  );
};

export default Warehouses;
