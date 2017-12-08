import styled from "styled-components";

import {
  COLOR_CONTENT_BACKGROUND,
  BORDER_RADIUS_BASE,
  FONT_STACK_BASE,
  FONT_SIZE_LG,
  PADDING_BASE
} from "style/styleVariables";
import { contrastColor, spacingScale } from "style/styleFunctions";

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export default CardContent;
