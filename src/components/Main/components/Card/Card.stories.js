import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Button from "components/Button";
import Card from "./Card";
import { FONT_SIZE_HERO, FONT_SIZE_BASE } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

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

const button = <Button glyph="Close" label="Clear Cache" tabIndex={0} />;

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
  .add("Card with custom style and order  ", () => (
    <div>
      <Card
        {...cacheCardProps}
        cardContainerStyle={cacheCardContainerStyle}
        titleStyle={cacheTitleStyle}
        bodyStyle={cacheBodyStyle}
      />
    </div>
  ))
  .add("Card with custom style, order, and children props", () => (
    <div>
      <Card
        {...cacheCardProps}
        bodyStyle={{
          fontSize: FONT_SIZE_HERO,
          order: 1,
          fontWeight: 500
        }}
        cardContainerStyle={{ width: "230px", height: "160px" }}
        children={button}
        childrenStyle={{
          fontSize: FONT_SIZE_HERO,
          order: 3
        }}
        mainStyle={{
          justifyContent: "flex-end",
          flexGrow: 1,
          paddingTop: spacingScale(2.5)
        }}
        titleStyle={{
          fontSize: FONT_SIZE_BASE,
          order: 2,
          fontWeight: "normal"
        }}
      />
    </div>
  ));
