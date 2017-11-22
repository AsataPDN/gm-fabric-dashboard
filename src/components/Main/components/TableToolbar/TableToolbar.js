// NPM Modules
import React from "react";
import { PropTypes } from "prop-types";

// Internal Components
import SearchInput from "./components/GMSearchInput";
import Button from "../../../Button";
import Form from "./components/Form";
import SecondaryText from "components/SecondaryText";
import GMSelect from "components/Main/components/GMSelect";
import Toolbar from "./components/Toolbar";
import ToolbarLeft from "./components/ToolbarLeft";
import ToolbarRight from "./components/ToolbarRight";
import ToolbarCenter from "./components/ToolbarCenter";

TableToolbar.propTypes = {
  displayType: PropTypes.oneOf(["Card", "Table"]), // if this is a Fabric Grid Toolbar, display type buttons will be rendered
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

export default function TableToolbar({
  displayType,
  setDisplayType,
  filterString,
  searchInputProps,
  setFilterString,
  groupByAttribute,
  groupByOptions,
  groupByProps,
  setGroupByAttribute,
  sortByAttribute,
  sortByOptions,
  sortByProps,
  setSortByAttribute
}) {
  return (
    <Toolbar>
      <ToolbarLeft>
        {setFilterString &&
          filterString != null && (
            <Form>
              <SearchInput
                className="form-control"
                {...searchInputProps}
                onChange={evt => setFilterString(evt.target.value)}
                placeholder="Search Services"
                aria-label="Search All Services"
                value={filterString}
              />
            </Form>
          )}
      </ToolbarLeft>
      {setDisplayType &&
        displayType && (
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
        )}
      <ToolbarRight>
        {setGroupByAttribute &&
          groupByOptions &&
          groupByAttribute && (
            <GMSelect
              {...groupByProps}
              name="form-field-group-by"
              options={groupByOptions}
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
          )}
        {setSortByAttribute &&
          sortByOptions &&
          sortByAttribute && (
            <GMSelect
              {...sortByProps}
              name="form-field-sort-by"
              options={sortByOptions}
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
