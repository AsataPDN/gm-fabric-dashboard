import React from "react";
import { PropTypes } from "prop-types";

import CardContainer from "./components/CardContainer";
import CardItem, { CardItemShape } from "./components/CardItem";

export default function Card({
  CardContainerStyle,
  CardItems = [],
  CardItemsStyle,
  CardItemsContainerStyle
}) {
  return (
    <CardContainer style={CardContainerStyle}>
      {CardItems.map(item => (
        <CardItem
          key={`${item.title}|${item.value}|${item.detail}`}
          {...item}
          CardItemsStyle={CardItemsStyle}
          CardItemsContainerStyle={CardItemsContainerStyle}
        />
      ))}
    </CardContainer>
  );
}

Card.propTypes = {
  CardContainerStyle: PropTypes.object,
  CardItems: PropTypes.oneOfType([
    PropTypes.arrayOf(CardItemShape),
    PropTypes.object
  ]),
  CardItemsContainerStyle: PropTypes.object,
  CardItemsStyle: PropTypes.object
};
