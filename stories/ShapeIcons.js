import React from "react";

import { storiesOf } from "@storybook/react";

import ShapeIcon from "../src/components/ShapeIcon";

storiesOf("Shape Icons", module)
  .add("Red Circle", () => <ShapeIcon color="red" shape="circle" />)
  .add("Yellow Square", () => <ShapeIcon color="yellow" shape="square" />)
  .add("Thick Yellow Square", () => (
    <ShapeIcon color="yellow" shape="square" thickBorder />
  ))
  .add("Green Triangle", () => (
    <ShapeIcon color="lightgreen" shape="triangle" />
  ));
