import styled from "styled-components";

import { FONT_SIZE_LG } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  justify-content: center;
  align-items: center;
  align-content: center;

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

export default CardMain;
