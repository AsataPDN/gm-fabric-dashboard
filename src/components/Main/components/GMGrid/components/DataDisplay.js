import styled from "styled-components";
import { PropTypes } from "prop-types";

import {
  FONT_STACK_DATA,
  FONT_SIZE_LG,
  COLOR_CONTENT_BACKGROUND,
  BORDER_RADIUS_BASE
} from "style/styleVariables";
import { spacingScale, contrastColor } from "style/styleFunctions";

const DataDisplay = styled.div`
  height: 100%;
  font-family: ${FONT_STACK_DATA};
  font-size: ${FONT_SIZE_LG};
  background-color: ${contrastColor(COLOR_CONTENT_BACKGROUND, 0.04).string()};
  border-radius: ${BORDER_RADIUS_BASE};
  padding: ${spacingScale(1)};

  padding-top: ${spacingScale(6)};
  ${props => (props.table ? "text-align: right" : "")};
`;

DataDisplay.propTypes = {
  table: PropTypes.bool
};

export default DataDisplay;
