// NPM Modules
import React from "react";
import { PropTypes } from "prop-types";

// Internal Components
import SearchInput from "./components/GMSearchInput";

// External Dependencies
import Button from "components/Button";
import Form from "./components/Form";
import SecondaryText from "components/SecondaryText";
import GMSelect from "../components/../GMSelect";
import Toolbar from "./components/Toolbar";
import ToolbarLeft from "./components/ToolbarLeft";
import ToolbarRight from "./components/ToolbarRight";
import ToolbarCenter from "./components/ToolbarCenter";

TableToolBar.propTypes = {
  displayType: PropTypes.oneOf(["Card", "Table"]), // if this is a Fabric Grid toolbar, display type buttons will be rendered
  filterString: PropTypes.string, // value for controlled SearchInput input
  groupByAttribute: PropTypes.string, // value for controlled GMSelect Group By dropdown
  groupByOptions: PropTypes.array, // array of option objects for the GMSelect Group By dropdown
  groupByProps: PropTypes.object, // optional props that will be passed down to SearchInput component
  searchInputProps: PropTypes.object, // optional props that will be passed down to GMSelect Group By dropdown
  setDisplayType: PropTypes.func, // onClick handler for ToolbarCenter buttons. Takes in either “Card” or “Table”.
  setFilterString: PropTypes.func, // onChange handler for search input
  setGroupByAttribute: PropTypes.func, // onChange handler for GMSelect Group By dropdown
  setSortByAttribute: PropTypes.func, // onChange handler for GMSelect Sort By dropdown
  sortByAttribute: PropTypes.string, // value for controlled GMSelect Sort By dropdown
  sortByOptions: PropTypes.array, // array of option objects for the GMSelect Sort By dropdown
  sortByProps: PropTypes.object // optional props that will be passed down to GMSelect Sort By dropdown
};

TableToolBar.defaultProps = {
  displayType: "",
  filterString: ""
};

export default function TableToolBar({
  displayType,
  filterString,
  setDisplayType,
  groupByAttribute,
  setFilterString,
  setGroupByAttribute,
  setSortByAttribute,
  sortByAttribute,
  statusView
}) {
  return (
    <Toolbar>
      <ToolbarLeft>
        <Form>
          <SearchInput
            className="form-control"
            onChange={evt => setFilterString(evt.target.value)}
            placeholder="Search Services"
            aria-label="Search All Services"
            value={filterString}
          />
        </Form>
      </ToolbarLeft>
      <ToolbarCenter>
        <Button
          active={displayType === "Card"}
          clickAction={() => setDisplayType("Card")}
          glyph="Card"
          label="Card"
        />
        <Button
          active={displayType === "Table"}
          clickAction={() => setDisplayType("Table")}
          glyph="List"
          label="List"
        />
      </ToolbarCenter>
      <ToolbarRight>
        <GMSelect
          name="form-field-group-by"
          options={
            statusView
              ? [
                  {
                    value: "Owner",
                    label: "Owner"
                  },
                  {
                    value: "Status",
                    label: "Status"
                  },
                  {
                    value: "Capability",
                    label: "Capability"
                  }
                ]
              : [
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
                ]
          }
          value={groupByAttribute}
          onChange={val => setGroupByAttribute(val.value)}
          clearable={false}
          searchable={false}
          valueRenderer={val => (
            <span>
              <span>Group </span>
              <SecondaryText>{val.label}</SecondaryText>
            </span>
          )}
        />
        <GMSelect
          name="form-field-sort-by"
          options={[
            {
              value: "Name",
              label: "Name"
            },
            {
              value: "Status",
              label: "Status"
            }
          ]}
          value={sortByAttribute}
          onChange={val => setSortByAttribute(val.value)}
          clearable={false}
          searchable={false}
          valueRenderer={val => (
            <span>
              <span>Sort </span>
              <SecondaryText>{val.label}</SecondaryText>
            </span>
          )}
        />
        )}
      </ToolbarRight>
    </Toolbar>
  );
}
