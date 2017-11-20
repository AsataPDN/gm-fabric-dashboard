import React from "react";

import { storiesOf } from "@storybook/react";

import TableToolbar from "./index.js";

storiesOf("Table Toolbar", module).add("T", () => {
  return <TableToolbar />;
});
