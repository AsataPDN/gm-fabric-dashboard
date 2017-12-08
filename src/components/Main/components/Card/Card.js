import React from "react";
import { PropTypes } from "prop-types";

import Icon from "components/Icon";
import Glyph from "components/Glyphs/index";
import CardContainer from "./components/CardContainer";
import CardTitle from "./components/CardTitle";
import CardBody from "./components/CardBody";
// import CardDetail from "./components/CardDetail";

export default function Card({
  cardContainerStyle,
  icon,
  iconBackgroundStyle,
  iconBorderStyle,
  iconBorderWidth,
  title,
  value,
  titleStyle,
  bodyStyle,
  children
}) {
  return (
    <CardContainer style={cardContainerStyle}>
      {icon && (
        <Icon
          iconBackgroundStyle={iconBackgroundStyle}
          iconBorderStyle={iconBorderStyle}
          iconBorderWidth={iconBorderWidth || "2"}
        >
          <Glyph name={icon} />
        </Icon>
      )}
      <CardTitle style={titleStyle}>{title || "—"}</CardTitle>
      <CardBody style={bodyStyle}>{value || "—"}</CardBody>
      <div>{children}</div>
    </CardContainer>
  );
}

const CardPropTypes = {
  bodyStyle: PropTypes.object,
  cacheCard: PropTypes.bool,
  cardContainerStyle: PropTypes.object,
  icon: PropTypes.string,
  iconBackgroundStyle: PropTypes.string,
  iconBorderStyle: PropTypes.string,
  iconBorderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
};

export const CardShape = PropTypes.shape(CardPropTypes);
Card.propTypes = CardPropTypes;
