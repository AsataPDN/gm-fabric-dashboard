import React from "react";
import { PropTypes } from "prop-types";

import Icon from "components/Icon";
import Glyph from "components/Glyphs/index";
import CardContainer from "./components/CardContainer";

import CardSection from "./components/CardSection";
import CardMain from "./components/CardMain";
import CardTitle from "./components/CardTitle";
import CardBody from "./components/CardBody";
import CardChildren from "./components/CardChildren";

export default function Card({
  bodyStyle,
  cardContainerStyle,
  children,
  childrenStyle,
  icon,
  iconBackgroundStyle,
  iconBorderStyle,
  iconBorderWidth,
  mainStyle,
  sectionStyle,
  title,
  titleStyle,
  value
}) {
  return (
    <CardContainer style={cardContainerStyle}>
      <CardSection style={sectionStyle}>
        <CardMain style={mainStyle}>
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
        </CardMain>
      </CardSection>
      {children && (
        <CardSection style={sectionStyle}>
          <CardChildren style={childrenStyle}>{children}</CardChildren>
        </CardSection>
      )}
    </CardContainer>
  );
}

Card.propTypes = {
  bodyStyle: PropTypes.object,
  cardContainerStyle: PropTypes.object,
  children: PropTypes.element,
  childrenStyle: PropTypes.object,
  icon: PropTypes.string,
  iconBackgroundStyle: PropTypes.string,
  iconBorderStyle: PropTypes.string,
  iconBorderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mainStyle: PropTypes.object,
  sectionStyle: PropTypes.object,
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
};
