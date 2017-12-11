import styled from "styled-components";

import { FONT_SIZE_LG } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

const CardMain = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;

  > * {
    font-size: ${FONT_SIZE_LG};
    overflow: hidden;
    padding-bottom: ${spacingScale(0.5)};
    padding-right: ${spacingScale(0.5)};
    padding-top: ${spacingScale(0.5)};
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default CardMain;
