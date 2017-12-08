import styled from "styled-components";

import {
  COLOR_CONTENT_BACKGROUND,
  BORDER_RADIUS_BASE,
  FONT_STACK_BASE,
  FONT_SIZE_LG,
  PADDING_BASE
} from "style/styleVariables";
import { contrastColor, spacingScale } from "style/styleFunctions";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: ${parseInt(PADDING_BASE, 10) * 2}px;
  padding: ${parseInt(PADDING_BASE, 10) * 2}px;
  background-color: ${contrastColor(COLOR_CONTENT_BACKGROUND, 0.03).string()};
  color: ${contrastColor(COLOR_CONTENT_BACKGROUND, 0.7).string()};

  min-width: 200px;

  > * {
    font-size: ${FONT_SIZE_LG};
    padding-right: ${spacingScale(0.5)};
    padding-top: ${spacingScale(0.5)};
    padding-bottom: ${spacingScale(0.5)};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default CardContainer;
