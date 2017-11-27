import React from "react";
import { mount } from "enzyme";
import renderer from "react-test-renderer";

import TableToolbar from "./index.js";

const options = [
  {
    value: "SampleVal1",
    label: "SampleVal1"
  },
  {
    value: "SampleVal2",
    label: "SampleVal2"
  }
];

const mockFabricViewProps = {
  displayType: "Card",
  setDisplayType: jest.fn(),
  filterString: "",
  searchPlaceholder: "Search",
  setFilterString: jest.fn(),
  groupByAttribute: "SampleVal1",
  groupByOptions: options,
  setGroupByAttribute: jest.fn(),
  sortByAttribute: "SampleVal2",
  sortByOptions: options,
  setSortByAttribute: jest.fn()
};

describe("Table Toolbar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<TableToolbar {...mockFabricViewProps} />);
  });

  test("matches snapshot", () => {
    const tree = renderer
      .create(<TableToolbar {...mockFabricViewProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders search box", () => {
    expect(wrapper.find({ type: "search" })).toHaveLength(1);
  });

  test("does not render search box if setFilterString, searchPlaceholder, or filterString are not provided", () => {
    wrapper.setProps({
      setFilterString: null,
      filterString: null,
      searchPlaceholder: null
    });
    expect(wrapper.find({ type: "search" })).toHaveLength(0);
  });

  test("renders display type buttons", () => {
    // Find buttons with title attributes "Card" and "List"
    expect(wrapper.find("button").find({ title: "Card" })).toHaveLength(1);
    expect(wrapper.find("button").find({ title: "List" })).toHaveLength(1);
  });

  test("does not render display type buttons if setDisplayType or displayType are not provided", () => {
    wrapper.setProps({
      setDisplayType: null,
      displayType: null
    });
    // Find buttons with title attributes "Card" and "List"
    expect(wrapper.find("button").find({ title: "Card" })).toHaveLength(0);
    expect(wrapper.find("button").find({ title: "List" })).toHaveLength(0);
  });

  test("adds an active class to button that matches displayType", () => {
    let cardButton = wrapper.find("button").find({ title: "Card" });
    let listButton = wrapper.find("button").find({ title: "List" });
    expect(cardButton.hasClass("active")).toBe(true);
    expect(listButton.hasClass("active")).toBe(false);
    wrapper.setProps({ displayType: "List" });
    listButton = wrapper.find("button").find({ title: "List" });
    cardButton = wrapper.find("button").find({ title: "Card" });
    expect(listButton.hasClass("active")).toBe(true);
    expect(cardButton.hasClass("active")).toBe(false);
  });

  test("renders a group by dropdown with a value equal to groupByAttribute", () => {
    const dropdown = wrapper
      .find("Select")
      .find("input")
      .find({ name: "form-field-group-by" });
    expect(dropdown).toHaveLength(1);
    expect(dropdown.props().value).toBe("SampleVal1");
  });

  test("does not render a group by dropdown if setGroupByAttribute, groupByOptions, or groupByAttribute is not provided", () => {
    wrapper.setProps({
      setGroupByAttribute: null,
      groupByOptions: null,
      groupByAttribute: null
    });
    const dropdown = wrapper
      .find("Select")
      .find("input")
      .find({ name: "form-field-group-by" });
    expect(dropdown).toHaveLength(0);
  });

  test("renders a sort by dropdown", () => {
    const dropdown = wrapper
      .find("Select")
      .find("input")
      .find({ name: "form-field-sort-by" });
    expect(dropdown).toHaveLength(1);
    expect(dropdown.props().value).toBe("SampleVal2");
  });

  test("does not render a group by dropdown if setSortByAttribute, sortByOptions, or sortByAttribute is not provided", () => {
    wrapper.setProps({
      setSortByAttribute: null,
      sortByOptions: null,
      sortByAttribute: null
    });
    const dropdown = wrapper
      .find("Select")
      .find("input")
      .find({ name: "form-field-sort-by" });
    expect(dropdown).toHaveLength(0);
  });
});
