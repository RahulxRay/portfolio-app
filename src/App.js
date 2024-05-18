"use strict";

import React, { useEffect, useMemo, useState, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import "./styles.css";
import { ClientSideRowModelModule } from "ag-grid-community";
import { ModuleRegistry } from "ag-grid-community";

// Register the required feature modules with the Grid
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const GridExample = () => {
  const containerStyle = useMemo(() => ({ width: "100%", height: "100vh" }), []);
  const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
  const [rowData, setRowData] = useState([]);
  const [columnDefs] = useState([
    { field: "Stock Symbol", minWidth: 150 },
    { field: "Company Name", minWidth: 200 },
    { field: "Market Cap" },
    { field: "Stock P.E", headerName: "Stock P/E" },
    { field: "Pledged" },
    { field: "ROCE" },
    { field: "ROE" },
    { field: "Down" },
    { field: "UP" },
    { field: "P+FII+DII" },
    { field: "Promoters" },
    { field: "FIIs" },
    { field: "DIIs" },
    { field: "Sales_SEP_2021", headerName: "Sales SEP 2021" },
    { field: "Sales_Jun2022", headerName: "Sales Jun 2022" },
    { field: "Sales_Sep2022", headerName: "Sales Sep 2022" },
    { field: "Sales_Dec2022", headerName: "Sales Dec 2022" },
    { field: "Sales_Mar2023", headerName: "Sales Mar 2023" },
    { field: "Sales_Jun2023", headerName: "Sales Jun 2023" },
    { field: "Sales_Sep2023", headerName: "Sales Sep 2023" },
    { field: "Sales_Dec2023", headerName: "Sales Dec 2023" },
    { field: "Expense_SEP_2021", headerName: "Expense SEP 2021" },
    { field: "Expense_Jun2022", headerName: "Expense Jun 2022" },
    { field: "Expense_Sep2022", headerName: "Expense Sep 2022" },
    { field: "Expense_Dec2022", headerName: "Expense Dec 2022" },
    { field: "Expense_Mar2023", headerName: "Expense Mar 2023" },
    { field: "Expense_Jun2023", headerName: "Expense Jun 2023" },
    { field: "Expense_Sep2023", headerName: "Expense Sep 2023" },
    { field: "Expense_Dec2023", headerName: "Expense Dec 2023" },
    { field: "Operating_Profit_Sep2021", headerName: "Operating Profit Sep 2021" },
    { field: "Operating_Profit_Jun2022", headerName: "Operating Profit Jun 2022" },
    { field: "Operating_Profit_Sep2022", headerName: "Operating Profit Sep 2022" },
    { field: "Operating_Profit_Dec2022", headerName: "Operating Profit Dec 2022" },
    { field: "Operating_Profit_Mar2023", headerName: "Operating Profit Mar 2023" },
    { field: "Operating_Profit_Jun2023", headerName: "Operating Profit Jun 2023" },
    { field: "Operating_Profit_Sep2023", headerName: "Operating Profit Sep 2023" },
    { field: "Operating_Profit_Dec2023", headerName: "Operating Profit Dec 2023" },
    { field: "OPM%_Sep2021", headerName: "OPM% Sep 2021" },
    { field: "OPM%_Jun2022", headerName: "OPM% Jun 2022" },
    { field: "OPM%_Sep2022", headerName: "OPM% Sep 2022" },
    { field: "OPM%_Dec2022", headerName: "OPM% Dec 2022" },
    { field: "OPM%_Mar2023", headerName: "OPM% Mar 2023" },
    { field: "OPM%_Jun2023", headerName: "OPM% Jun 2023" },
    { field: "OPM%_Sep2023", headerName: "OPM% Sep 2023" },
    { field: "OPM%_Dec2023", headerName: "OPM% Dec 2023" },
    { field: "Profit_before_tax_Sep2021", headerName: "Profit before tax Sep 2021" },
    { field: "Profit_before_tax_Jun2022", headerName: "Profit before tax Jun 2022" },
    { field: "Profit_before_tax_Sep2022", headerName: "Profit before tax Sep 2022" },
    { field: "Profit_before_tax_Dec2022", headerName: "Profit before tax Dec 2022" },
    { field: "Profit_before_tax_Mar2023", headerName: "Profit before tax Mar 2023" },
    { field: "Profit_before_tax_Jun2023", headerName: "Profit before tax Jun 2023" },
    { field: "Profit_before_tax_Sep2023", headerName: "Profit before tax Sep 2023" },
    { field: "Profit_before_tax_Dec2023", headerName: "Profit before tax Dec 2023" },
    { field: "Net_Profit_Sep2021", headerName: "Net Profit Sep 2021" },
    { field: "Net_Profit_Jun2022", headerName: "Net Profit Jun 2022" },
    { field: "Net_Profit_Sep2022", headerName: "Net Profit Sep 2022" },
    { field: "Net_Profit_Dec2022", headerName: "Net Profit Dec 2022" },
    { field: "Net_Profit_Mar2023", headerName: "Net Profit Mar 2023" },
    { field: "Net_Profit_Jun2023", headerName: "Net Profit Jun 2023" },
    { field: "Net_Profit_Sep2023", headerName: "Net Profit Sep 2023" },
    { field: "Net_Profit_Dec2023", headerName: "Net Profit Dec 2023" },
    { field: "EPS_in_Rs._Sep2021", headerName: "EPS in Rs. Sep 2021" },
    { field: "EPS_in_Rs._Jun2022", headerName: "EPS in Rs. Jun 2022" },
    { field: "EPS_in_Rs._Sep2022", headerName: "EPS in Rs. Sep 2022" },
    { field: "EPS_in_Rs._Dec2022", headerName: "EPS in Rs. Dec 2022" },
    { field: "EPS_in_Rs._Mar2023", headerName: "EPS in Rs. Mar 2023" },
    { field: "EPS_in_Rs._Jun2023", headerName: "EPS in Rs. Jun 2023" },
    { field: "EPS_in_Rs._Sep2023", headerName: "EPS in Rs. Sep 2023" },
    { field: "EPS_in_Rs._Dec2023", headerName: "EPS in Rs. Dec 2023" },
  ]);

  useEffect(() => {
    fetch("/api/data")
      .then(response => response.json())
      .then(data => {
        console.log("Data fetched from server:", data);  // Log the data
        setRowData(data);
      })
      .catch(error => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div style={containerStyle}>
      <div style={gridStyle} className="ag-theme-quartz">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
        />
      </div>
    </div>
  );
};

// Export the GridExample component as the default export
export default GridExample;

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <GridExample />
  </StrictMode>
);

window.tearDownExample = () => root.unmount();
