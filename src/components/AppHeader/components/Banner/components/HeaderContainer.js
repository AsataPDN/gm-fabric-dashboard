import styled from "styled-components";

import {
  contrastColor,
  spacingScale
} from "../../../../../style/styleFunctions";
import { COLOR_ALT_BACKGROUND } from "../../../../../style/styleVariables";

const HeaderContainer = styled.div`
  background: ${props =>
    props.hideBackground ? COLOR_ALT_BACKGROUND.string() : "transparent"};
  color: ${contrastColor(COLOR_ALT_BACKGROUND, 1).string()};
  padding: ${spacingScale(1.5)} ${spacingScale(2)} ${spacingScale(1.5)};
  transition: all 0.1s ease;

  @media all and (min-width: 1000px) {
    padding: ${spacingScale(2)} ${spacingScale(4)} ${spacingScale(3)};
  }
`;

export default HeaderContainer;
