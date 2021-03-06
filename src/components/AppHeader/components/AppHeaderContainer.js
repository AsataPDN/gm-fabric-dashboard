import styled from "styled-components";

import { COLOR_ALT_BACKGROUND } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

import BannerBackgroundImage from "images/app-banner.png";

const AppHeaderContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: stretch;
  background-image: url(${BannerBackgroundImage});
  background-size: auto 101px;
  background-repeat: no-repeat;
  background-position: 88% ${spacingScale(4)};
  background-color: ${COLOR_ALT_BACKGROUND.string()};
`;

export default AppHeaderContainer;
