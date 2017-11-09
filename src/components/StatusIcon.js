import React from "react";
import PropTypes from "prop-types";

import {
  COLOR_SUCCESS,
  COLOR_DANGER,
  COLOR_WARNING
} from "style/styleVariables";

import ServicesIcon from "images/icons/services.svg";
import Icon from "components/Icon";
import Negation from "components/Glyphs/Negation";
import RunningSmall from "components/Glyphs/RunningSmall";
import Exclamation from "components/Glyphs/Exclamation";

StatusIcon.propTypes = {
  backgroundColor: PropTypes.string,
  iconRatio: PropTypes.string,
  status: PropTypes.string
};

export default function StatusIcon({
  status = "down",
  backgroundColor,
  iconRatio
}) {
  if (status.toLowerCase() === "down") {
    const downBackgroundColor = backgroundColor || COLOR_DANGER.string();
    const downGlyphColor = backgroundColor || COLOR_DANGER.string();
    return (
      <Icon
        backgroundColor={downBackgroundColor}
        glyphColor={downGlyphColor}
        backgroundStyle="BackgroundSquareSmall"
        backgroundOpacity=".2"
        iconRatio={iconRatio}
      >
        <Negation />
      </Icon>
    );
  } else if (status.toLowerCase() === "warning") {
    const warningBackgroundColor =
      backgroundColor ||
      COLOR_WARNING.darken(0.1)
        .saturate(0.1)
        .string();
    const warningGlyphColor =
      backgroundColor ||
      COLOR_WARNING.darken(0.2)
        .saturate(1)
        .string();
    return (
      <Icon
        backgroundColor={warningBackgroundColor}
        glyphColor={warningGlyphColor}
        backgroundStyle="BackgroundTriangleSmall"
        backgroundOpacity=".4"
        iconRatio={iconRatio}
      >
        <Exclamation />
      </Icon>
    );
  } else if (status.toLowerCase() === "stable") {
    const stableBackgroundColor = backgroundColor || COLOR_SUCCESS.string();
    const stableGlyphColor = backgroundColor || COLOR_SUCCESS.string();
    return (
      <Icon
        backgroundColor={stableBackgroundColor}
        glyphColor={stableGlyphColor}
        backgroundStyle="BackgroundCircleSmall"
        backgroundOpacity=".2"
        iconRatio={iconRatio}
      >
        <RunningSmall />
      </Icon>
    );
  } else {
    return <img src={ServicesIcon} alt="" />;
  }
}
