import React from "react";

import { storiesOf } from "@storybook/react";

import TableToolbar from "./index.js";

import { withKnobs, text, object, select } from "@storybook/addon-knobs";

const sortByOptions = [
  {
    value: "Name",
    label: "Name"
  },
  {
    value: "Status",
    label: "Status"
  }
];
const groupByOptions = [
  {
    value: "Owner",
    label: "Owner"
  },
  {
    value: "Capability",
    label: "Capability"
  },
  {
    value: "Status",
    label: "Status"
  },
  {
    value: "None",
    label: "None"
  }
];
storiesOf("Table Toolbar", module)
  .addDecorator(withKnobs)
  .add("Fabric Main View", () => {
    return (
      <div style={{ width: "100%" }}>
        <TableToolbar
          displayType={select("displayType", ["Card", "List"], "Card")}
          setDisplayType={() => alert("Fired setDisplayType()")}
          setFilterString={() => alert("Fired setFilterString()")}
          filterString={text("filterString", "string to search")}
          groupByOptions={object("groupByOptions", groupByOptions)}
          groupByAttribute={select(
            "groupByAttribute",
            ["Owner", "Capability", "Status", "None"],
            "Status"
          )}
          setGroupByAttribute={() => alert("Fired setGroupByAttribute()")}
          sortByOptions={object("sortByOptions", sortByOptions)}
          sortByAttribute={select(
            "sortByAttribute",
            ["Name", "Status"],
            "Status"
          )}
          setSortByAttribute={() => alert("Fired setSortByAttribute()")}
        />
      </div>
    );
  })
  .add("Fabric Status View", () => {
    return (
      <div style={{ width: "100%" }}>
        <TableToolbar
          displayType={select("displayType", ["Card", "List"], "Card")}
          setDisplayType={() => alert("Fired setDisplayType()")}
          setFilterString={() => alert("Fired setFilterString()")}
          filterString={text("filterString", "string to search")}
          groupByOptions={object("groupByOptions", groupByOptions)}
          groupByAttribute={select(
            "groupByAttribute",
            ["Owner", "Capability", "Status", "None"],
            "Status"
          )}
          setGroupByAttribute={() => alert("Fired setGroupByAttribute()")}
        />
      </div>
    );
  })
  .add("Service/Function/Routes View", () => {
    return (
      <div style={{ width: "100%" }}>
        <TableToolbar
          setDisplayType={() => alert("Fired setDisplayType()")}
          setFilterString={() => alert("Fired setFilterString()")}
          filterString={text("filterString", "string to search")}
          sortByOptions={object("sortByOptions", sortByOptions)}
          sortByAttribute={select(
            "sortByAttribute",
            ["Name", "Status"],
            "Status"
          )}
          setSortByAttribute={() => alert("Fired setSortByAttribute()")}
        />
      </div>
    );
  });
