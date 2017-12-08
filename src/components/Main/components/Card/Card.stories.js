import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Card from "./Card";
import {
  COLOR_CONTENT_BACKGROUND,
  BORDER_RADIUS_BASE,
  FONT_STACK_BASE,
  FONT_SIZE_LG,
  PADDING_BASE,
  FONT_SIZE_HERO,
  FONT_SIZE_BASE
} from "style/styleVariables";

const props = {
  icon: "Tape",
  title: "Cache Size",
  value: "162.12MB"
};

const cacheCardProps = {
  title: "Cache Size",
  value: "162.12MB"
};

const cardContainerStyle = { width: "50%" };
const titleStyle = { fontSize: 50, color: "green" };
const bodyStyle = { fontSize: 40 };

const cacheCardContainerStyle = { width: "230px" };
const cacheTitleStyle = {
  fontSize: FONT_SIZE_BASE,
  order: 1,
  fontWeight: "normal"
};
const cacheBodyStyle = {
  fontSize: FONT_SIZE_HERO,
  order: 0
};

storiesOf("Card", module)
  .addDecorator(withKnobs)
  .add("Card", () => <Card {...props} />)
  .add("Many Cards ", () => (
    <div>
      <Card {...props} />
      <Card {...props} />
      <Card {...props} />
    </div>
  ))
  .add("Card with custom width ", () => (
    <div>
      <Card {...props} cardContainerStyle={cardContainerStyle} />
    </div>
  ))
  .add("Card with custom body style ", () => (
    <div>
      <Card
        {...props}
        cardContainerStyle={cardContainerStyle}
        bodyStyle={bodyStyle}
      />
    </div>
  ))
  .add("Card with custom title style ", () => (
    <div>
      <Card
        {...props}
        cardContainerStyle={cardContainerStyle}
        titleStyle={titleStyle}
      />
    </div>
  ))
  .add("Metrics Cache Card  ", () => (
    <div>
      <Card
        {...cacheCardProps}
        cardContainerStyle={cacheCardContainerStyle}
        titleStyle={cacheTitleStyle}
        bodyStyle={cacheBodyStyle}
      />
    </div>
  ));
