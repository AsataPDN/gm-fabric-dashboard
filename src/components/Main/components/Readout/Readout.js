import React from "react";
import { PropTypes } from "prop-types";

import ReadoutDisplay from "./components/ReadoutDisplay";
import ReadoutItem, { ReadoutItemShape } from "./components/ReadoutItem";

export default function Readout({ children, primary, readoutItems = [] }) {
  return (
    <ReadoutDisplay primary={primary}>
      {readoutItems.map(item => (
        <ReadoutItem
          key={`${item.title}|${item.value}|${item.detail}`}
          {...item}
        />
      ))}
    </ReadoutDisplay>
  );
}

Readout.propTypes = {
  children: PropTypes.element,
  primary: PropTypes.bool,
  readoutItems: PropTypes.oneOfType([
    PropTypes.arrayOf(ReadoutItemShape),
    PropTypes.object
  ])
};
