import Color from "color";
import { css } from "styled-components";
import { contrastColor } from "./styleFunctions";
import { injectGlobal } from "styled-components";
import Nunito400 from "./fonts/Nunito/Nunito-Regular.ttf";
import Nunito600 from "./fonts/Nunito/Nunito-SemiBold.ttf";
import Rubik400 from "./fonts/Rubik/Rubik-Regular.ttf";
import Rubik500 from "./fonts/Rubik/Rubik-Medium.ttf";
import Rubik700 from "./fonts/Rubik/Rubik-Bold.ttf";
import SourceCodePro400 from "./fonts/Source_Code_Pro/SourceCodePro-Regular.ttf";
import NotificationWrapper from "components/Notification/components/NotificationsWrapper";
import { spacingScale } from "./styleFunctions";

export const COLOR_BRAND_PRIMARY = Color("#0aab2a");
export const COLOR_BRAND_SECONDARY = Color("#002e6e");

export const COLOR_RED = Color("#E4251A");
export const COLOR_BLACK = Color("#000");
export const COLOR_GREEN = Color("#0aab2a");
export const COLOR_WHITE = Color("#fff");

export const COLOR_HIGHLIGHT = COLOR_BRAND_PRIMARY;
export const COLOR_SUCCESS = Color("#0aab2a");
export const COLOR_DANGER = Color("red")
  .darken(0.15)
  .saturate(0.1);
export const COLOR_WARNING = Color("#FAC60F");
export const COLOR_INFO = Color("blue");

export const COLOR_STOP_1 = COLOR_SUCCESS;
export const COLOR_STOP_2 = COLOR_WARNING.mix(COLOR_DANGER, 0.3).darken(0.1);
export const COLOR_STOP_3 = COLOR_DANGER;

// Z-Index Mapping
export const ZINDEX_STICKY = "1010";
export const ZINDEX_DROPDOWN = "1020";
export const ZINDEX_FIXED = "1030";
export const ZINDEX_MODAL_BACKDROP = "1040";
export const ZINDEX_MODAL = "1050";
export const ZINDEX_POPOVER = "1060";
export const ZINDEX_TOOLTIP = "1070";

// Theme Configuration
export const COLOR_ALT_BACKGROUND = COLOR_BLACK;
export const COLOR_ALT_CONTENT = COLOR_WHITE;
export const COLOR_CONTENT_BACKGROUND = COLOR_WHITE;

export const BORDER_RADIUS_BASE = "3px";
export const PADDING_BASE = "8px";

// Contrasts
export const DARK_ON_LIGHT_CONTRAST_ENHANCEMENT_RATIO = 2;
export const CONTRAST_INTERVAL = "4%";
export const COLOR_CONTENT = contrastColor(COLOR_CONTENT_BACKGROUND, 0.875);
export const COLOR_CONTENT_MUTED = contrastColor(COLOR_CONTENT_BACKGROUND, 0.7);

export const APP_FOOTER_HEIGHT = "32px";
export const CONTENT_MAX_WIDTH = "1300px";

export const ICON_VIEWBOX_SIZE = 24;

// Typography

// Inject custom font-faces directly into the global CSS generated by styled-components
// See injectGlobal in https://www.styled-components.com/docs/api

// Backup font list
export const FONT_GROUP_SYSTEM = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`;

// Fonts for specific use
export const FONT_GROUP_MAIN_TEXT = "Nunito";
export const FONT_GROUP_DATA = "Rubik";
export const FONT_GROUP_CODE = `"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace`;
export const FONT_GROUP_DATA_MONO = "Source Code Pro";

export const FONT_STACK_BASE = `${FONT_GROUP_MAIN_TEXT}, ${FONT_GROUP_SYSTEM}`;
export const FONT_STACK_DATA = `${FONT_GROUP_DATA}, ${FONT_GROUP_SYSTEM}`;
export const FONT_STACK_DATA_MONO = `${FONT_GROUP_DATA_MONO}, ${
  FONT_GROUP_DATA
}, ${FONT_GROUP_SYSTEM}`;
export const FONT_STACK_CODE = FONT_GROUP_CODE;

export const LINE_HEIGHT_BASE = 1.4;
export const FONT_WEIGHT_BASE = 500;
export const FONT_SIZE_HERO = "32px";
export const FONT_SIZE_H2 = "24px";
export const FONT_SIZE_H3 = "22px";
export const FONT_SIZE_LG = "18px";
export const FONT_SIZE_BASE = "14px";
export const FONT_SIZE_SM = "11px";
export const FONT_SIZE_XS = "9px";

// Line chart

export const CHART_BACKGROUND_COLOR = "transparent";
export const CHART_HEIGHT_BASE = "250px";

export const TABLE_BORDER = COLOR_CONTENT_BACKGROUND.darken(0.08).string();

export const TABLE_HOVER = COLOR_CONTENT_BACKGROUND.darken(0.02).string();

export const media = {
  breadcrumbsBreakpoint200: (...args) => css`
    @media (max-width: 800px) {
      ${css(...args)};
    }
  `,
  breadcrumbsBreakpointHandheld: (...args) => css`
    @media (max-width: 567px) {
      ${css(...args)};
    }
  `
};

injectGlobal`
  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    src: url(${Nunito400});
  }
  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    src: url(${Nunito600});
  }
  @font-face {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    src: url(${Rubik400});
  }
  @font-face {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 500;
    src: url(${Rubik500})
  }
  @font-face {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 700;
    src: url(${Rubik700});
  }
  @font-face {
    font-family: "SourceCodePro";
    font-style: normal;
    font-weight: 400;
    src: url(${SourceCodePro400});
  }

  *, *:before, *:after{
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }

  html {
    font-family: ${FONT_STACK_BASE};
    font-size: ${FONT_SIZE_BASE};
  }

  :root,
  html,
  body,
  #root {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3 {
    font-family: ${FONT_STACK_BASE};
    font-weight: ${FONT_WEIGHT_BASE};
    color: inherit;
  }

  h1 {
    font-size: ${FONT_SIZE_HERO};
  }

  h2 {
    font-size: ${FONT_SIZE_H2};
  }

  h3 {
    font-size: ${FONT_SIZE_H3};
  }

  a {
    text-decoration: none;
  }

  ${NotificationWrapper}

  .notification-title {
  margin: 0 0 ${spacingScale(1)};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: ${FONT_SIZE_SM};
  font-family: ${FONT_STACK_DATA};
  padding: 0;
}
.notification {
  background-color: white;
  overflow: hidden;
  border-radius: 2px;
  color: black;
  font-weight: 600;
  display: block;
  font-size: 14px;
  margin: 0;
  opacity: 0;
  position: relative;
  transform: translateY(1em) scale(0.8);
  transition: all 0.3s ease;
  width: 100%;
  z-index: 1;
  padding: 0 ${spacingScale(1)};
  margin: 0;
  flex: 0 0 0px;
  min-height: 0;
  line-height: 0;

  &[class*="-visible"] {
    flex: 1 1;
    opacity: 1;
    padding: ${spacingScale(1)};
    margin-top: ${spacingScale(1)};
    transform: translateY(0) scale(1);
    line-height: 1.4;
    filter: blur(0);

    > * {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &[class*="-hidden"] {
    transition: all 1s ease;
    flex: 0 0 0px;
    transform: translateY(-0.5em);
    filter: blur(1px);

    .notification-title {
      transition: all calc(0.3s*2) ease;
      line-height: 0;
      margin: 0;
    }

    > * {
      transform: translateY(-1em);
      opacity: 0;
    }
  }

  > * {
    transition: opacity calc(0.3s*2) ease,
      transform calc(0.3s*2) ease;
    transform: translateY(100%) scale(0.8);
    opacity: 0;
  }
  span.notification-dismiss {
    display: none;
  }
}
.notification-message, .notification-action-wrapper, .notification-action-button {
  margin: 0;
  padding: 0;
}
`;
