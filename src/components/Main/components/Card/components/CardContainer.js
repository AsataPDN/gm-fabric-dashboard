import styled from "styled-components";

import { COLOR_CONTENT_BACKGROUND, PADDING_BASE } from "style/styleVariables";
import { contrastColor } from "style/styleFunctions";

const CardContainer = styled.div`
  align-content: center;
  align-items: center;
  background-color: ${contrastColor(COLOR_CONTENT_BACKGROUND, 0.03).string()};
  color: ${contrastColor(COLOR_CONTENT_BACKGROUND, 0.7).string()};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${parseInt(PADDING_BASE, 10) * 2}px;
  min-width: 200px;
  padding: ${parseInt(PADDING_BASE, 10) * 2}px;
`;

export default CardContainer;
