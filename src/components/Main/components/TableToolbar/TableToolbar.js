// NPM Modules
import React from "react";
import { PropTypes } from "prop-types";

// Internal Components
import SearchInput from "components/Main/components/GMSearchInput";
import Button from "components/Button";
import Form from "./components/Form";
import GMSelect from "components/Main/components/GMSelect";
import { GMSelectValueRenderer } from "components/Main/components/GMSelect";
import Toolbar from "./components/Toolbar";
import ToolbarLeft from "./components/ToolbarLeft";
import ToolbarRight from "./components/ToolbarRight";
import ToolbarCenter from "./components/ToolbarCenter";

/** A reusable toolbar that renders any combination of search box, display type toggle buttons,
 *  and sorting or grouping dropdowns. To render a subcomponent, pass it the correct props.
 *  You may also use toolbar children props to render custom subcomponents.
 * @function TableToolbar
 */

TableToolbar.propTypes = {
  displayTypeProps: PropTypes.shape({
    displayType: PropTypes.oneOf(["Card", "List"]).isRequired, // if this is a Fabric Grid Toolbar, display type buttons will be rendered
    setDisplayType: PropTypes.func.isRequired // onClick handler for ToolbarCenter buttons. Takes in either “Card” or “Table”.
  }),
  groupByProps: PropTypes.shape({
    groupByAttribute: PropTypes.string.isRequired, // value for controlled GMSelect Group By dropdown
    groupByOptions: PropTypes.array.isRequired, // array of option objects for the GMSelect Group By dropdown
    setGroupByAttribute: PropTypes.func.isRequired // onChange handler for GMSelect Group By dropdown
  }),
  searchInputProps: PropTypes.shape({
    filterString: PropTypes.string.isRequired, // value for controlled SearchInput input
    setFilterString: PropTypes.func.isRequired, // onChange handler for search input
    searchPlaceholder: PropTypes.string.isRequired // placeholder for SearchInput
  }),
  sortByProps: PropTypes.shape({
    setSortByAttribute: PropTypes.func, // onChange handler for GMSelect Sort By dropdown
    sortByAttribute: PropTypes.string, // value for controlled GMSelect Sort By dropdown
    sortByOptions: PropTypes.array // array of option objects for the GMSelect Sort By dropdown
  }),
  // the following are optional props to be rendered as children of their respective columns
  toolbarCenterChildren: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ]),
  toolbarLeftChildren: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  toolbarRightChildren: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};

export default function TableToolbar({
  displayTypeProps,
  searchInputProps,
  groupByProps,
  sortByProps,
  toolbarLeftChildren,
  toolbarCenterChildren,
  toolbarRightChildren
}) {
  return (
    <Toolbar>
      <ToolbarLeft>
        {searchInputProps && (
          <Form>
            <SearchInput
              onChange={evt =>
                searchInputProps.setFilterString(evt.target.value)
              }
              placeholder={searchInputProps.searchPlaceholder}
              aria-label={searchInputProps.searchPlaceholder}
              value={searchInputProps.filterString}
            />
          </Form>
        )}
        {toolbarLeftChildren}
      </ToolbarLeft>
      <ToolbarCenter>
        {displayTypeProps && [
          <Button
            active={displayTypeProps.displayType === "Card"}
            clickAction={() => displayTypeProps.setDisplayType("Card")}
            glyph="Card"
            label="Card"
            key="Card"
          />,
          <Button
            active={displayTypeProps.displayType === "List"}
            clickAction={() => displayTypeProps.setDisplayType("List")}
            glyph="List"
            label="List"
            key="List"
          />
        ]}
        {toolbarCenterChildren}
      </ToolbarCenter>
      <ToolbarRight>
        {groupByProps && (
          <GMSelect
            name="form-field-group-by"
            options={groupByProps.groupByOptions}
            value={groupByProps.groupByAttribute}
            onChange={val => groupByProps.setGroupByAttribute(val.value)}
            clearable={false}
            searchable={false}
            valueRenderer={val => (
              <GMSelectValueRenderer title="Group" val={val} />
            )}
          />
        )}
        {sortByProps && (
          <GMSelect
            name="form-field-sort-by"
            options={sortByProps.sortByOptions}
            value={sortByProps.sortByAttribute}
            onChange={val => sortByProps.setSortByAttribute(val.value)}
            clearable={false}
            searchable={false}
            valueRenderer={val => (
              <GMSelectValueRenderer title="Sort" val={val} />
            )}
          />
        )}
        {toolbarRightChildren}
      </ToolbarRight>
    </Toolbar>
  );
}
