import React from "react";
import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

// Utilities
import mockState from "json/mockReduxState";

// Components
import ThreadsGrid from "./index";

// import Actions
import "services";

const threadsTableProps = {
  filteredThreadData: [
    {
      daemon: true,
      id: "2",
      name: "Test Runnable",
      priority: 8,
      stack: [
        "java.lang.Object.wait(Native Method)",
        "java.lang.ref.ReferenceQueue.remove(ReferenceQueue.java:143)",
        "java.lang.ref.ReferenceQueue.remove(ReferenceQueue.java:164)",
        "java.lang.ref.Finalizer$FinalizerThread.run(Finalizer.java:209)"
      ],
      state: "RUNNABLE"
    }
  ]
};
// Create a mock store and initialize with mock data
const store = configureStore()(mockState);

// Wrap ThreadsGrid in Memory Router
const RouterWrap = (
  <Provider store={store}>
    <MemoryRouter>
      <Route render={props => <ThreadsGrid {...props} />} />
    </MemoryRouter>
  </Provider>
);

let wrapper;

describe("ThreadsGrid View", () => {
  beforeEach(() => {
    wrapper = mount(RouterWrap);
  });

  xtest("matches snapshot", () => {
    const tree = renderer.create(RouterWrap).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xtest("renders correct components", () => {
    expect(wrapper.find("TableToolbar")).toHaveLength(1);
    expect(wrapper.find("ThreadsTable")).toHaveLength(1);
    expect(wrapper.find("ErrorBoundary")).toHaveLength(1);
  });

  xtest("passes the correct props down to TableToolbar", () => {
    const threadsGridInstance = wrapper.find("ThreadsGrid").instance();
    expect(wrapper.find("TableToolbar").props()).toMatchObject({
      groupByProps: {
        groupByAttribute: "none",
        groupByOptions: [
          { label: "State", value: "state" },
          { label: "None", value: "none" }
        ],
        setGroupByAttribute: threadsGridInstance.setGroupByAttribute
      },
      searchInputProps: {
        filterString: "",
        searchPlaceholder: "Search Threads",
        setFilterString: threadsGridInstance.setFilterString
      },
      sortByProps: {
        setSortByAttribute: threadsGridInstance.setSortByAttribute,
        sortByAttribute: "id",
        sortByOptions: [
          { label: "State", value: "state" },
          { label: "Name", value: "name" },
          { label: "ID", value: "id" }
        ]
      }
    });
  });

  xtest("passes the correct props down to ThreadsTable", () => {
    expect(wrapper.find("ThreadsTable").props()).toMatchObject(
      threadsTableProps
    );
  });
});
