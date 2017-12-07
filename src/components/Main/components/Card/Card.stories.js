import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import Card from "./Card";

const props = {
  icon: "Tape",
  title: "Cache Size",
  value: "162.12MB"
};

const cardContainerStyle = { width: "50%" };
const titleStyle = { fontSize: 50, color: "green" };
const bodyStyle = { fontSize: 40 };

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
  ));
