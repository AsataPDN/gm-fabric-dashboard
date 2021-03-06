import styled from "styled-components";

import { contrastColor, spacingScale } from "style/styleFunctions";
import { COLOR_ALT_BACKGROUND } from "style/styleVariables";

const COLOR_TAB_BACKGROUND_BASE = contrastColor(COLOR_ALT_BACKGROUND, 0.175);

const TabGraph = styled.div`
  height: ${spacingScale(3)};
  color: ${contrastColor(COLOR_TAB_BACKGROUND_BASE, 0.8).string()};
  margin: 0 ${spacingScale(0.25)};
  padding-top: ${spacingScale(0.5)};
  padding-bottom: ${spacingScale(0.5)};
`;

export default TabGraph;
