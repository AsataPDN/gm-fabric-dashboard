import React from "react";
import TableColHeader from "./TableColHeader";

const styleProps = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center"
};

function TableColLatencyHeader() {
  return (
    <TableColHeader style={styleProps}>
      <div style={{ padding: "8px" }}>Latency</div>
      <div style={styleProps}>
        <div>50%</div>
        <div>99%</div>
      </div>
    </TableColHeader>
  );
}
export default TableColLatencyHeader;
