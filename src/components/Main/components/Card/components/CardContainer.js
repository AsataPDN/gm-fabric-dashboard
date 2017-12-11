import styled from "styled-components";

import { COLOR_CONTENT_BACKGROUND, PADDING_BASE } from "style/styleVariables";
import { contrastColor } from "style/styleFunctions";

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
`;

export default CardContainer;
