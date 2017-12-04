import PropTypes from "prop-types";
import styled from "styled-components";

import {
  COLOR_HIGHLIGHT,
  COLOR_WHITE,
  BORDER_RADIUS_BASE
} from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const InspectorItem = styled.div`
  display: block;
  cursor: pointer;
  display: flex;
  padding: ${spacingScale(0.5)} ${spacingScale(1)};
  word-wrap: break-word;
  transition: all 0.2s ease;
  border-radius: ${BORDER_RADIUS_BASE};
  will-change: transform;

  &:focus {
    outline: -webkit-focus-ring-color auto 5px;
  }

  &:focus:active:hover {
    outline: 0;
  }

  &:first-child {
    margin-top: ${spacingScale(1)};
  }

  &:hover {
    color: ${COLOR_HIGHLIGHT.string()};
  }

  &:active {
    color: ${COLOR_HIGHLIGHT.string()};
    transform: scale(0.9875);
    transition-duration: 0;
  }
  ${props =>
    props.active &&
    `background: ${COLOR_HIGHLIGHT.string()};
    color: ${COLOR_WHITE.string()} !important;
    transform: scale(1.0125);
    z-index: 999999;`};
`;

InspectorItem.propTypes = {
  active: PropTypes.bool
};

export default InspectorItem;
