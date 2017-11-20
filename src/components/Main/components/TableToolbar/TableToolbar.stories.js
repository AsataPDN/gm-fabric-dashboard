import React from "react";

import StoryRouter from "storybook-router";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";

import TableToolbar from "./TableToolbar";

storiesOf("Table Toolbar", module)
  .addDecorator(withKnobs)
  .add("Vizfill bar", () => {
    return <TableToolbar />;
  });
