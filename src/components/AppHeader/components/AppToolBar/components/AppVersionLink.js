import styled from "styled-components";

import { spacingScale } from "style/styleFunctions";
import { FONT_SIZE_XS } from "style/styleVariables";

const AppVersionLink = styled.a`
  color: white;
  flex: 0 0 auto;
  font-size: ${FONT_SIZE_XS};
  font-weight: 600;
  opacity: 1;
  padding: 0 ${spacingScale(1)};

  &:hover {
    color: white;
    opacity: 1;
  }
`;

export default AppVersionLink;
