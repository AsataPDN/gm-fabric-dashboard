import React from "react";
import TableColHeader from "./TableColHeader";
import styled from "styled-components";

const LatencyHeaderWrap = TableColHeader.extend`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const PercentileHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

function TableColLatencyHeader() {
  return (
    <LatencyHeaderWrap>
      <div style={{ padding: "8px" }}>Latency</div>
      <PercentileHeader>
        <div>50%</div>
        <div>99%</div>
      </PercentileHeader>
    </LatencyHeaderWrap>
  );
}
export default TableColLatencyHeader;
