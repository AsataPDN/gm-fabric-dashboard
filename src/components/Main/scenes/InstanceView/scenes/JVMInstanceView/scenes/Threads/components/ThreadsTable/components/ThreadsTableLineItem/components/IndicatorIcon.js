import { PropTypes } from "prop-types";
import React from "react";

IndicatorIcon.propTypes = {
  alt: PropTypes.string,
  color: PropTypes.string,
  diameter: PropTypes.number.isRequired
};

/**
 * Wrapper for a custom circular SVG used to provide color indicator lights
 * @param {Object} props - see propTypes
 */
function IndicatorIcon({ alt, diameter, color }) {
  return (
    <span>
      <svg height={diameter} width={diameter}>
        <g>
          <title>{alt}</title>
          <circle
            cx={diameter * 0.5}
            cy={diameter * 0.5}
            fill={color || "white"}
            r={diameter * 0.4}
            stroke={color || "black"}
            strokeWidth="3"
          />
        </g>
      </svg>
    </span>
  );
}

export default IndicatorIcon;
