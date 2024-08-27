import React from "react";
import InStockDataHeader from "./InStockDataHeader";
import InStockSubHeadings from "./InStockSubHeadings";

const Warehouses = () => {
  return (
    <div>
      <InStockDataHeader title={"Warehouses"} btnText={"+ Add New Warehouse"} />
      <InStockSubHeadings />
    </div>
  );
};

export default Warehouses;
