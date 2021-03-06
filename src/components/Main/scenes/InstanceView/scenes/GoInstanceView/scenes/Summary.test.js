import React from "react";
import { shallow } from "enzyme";
import mockState from "json/mockReduxStateGO";
import configureStore from "redux-mock-store";

import LayoutSection from "components/LayoutSection";
import GMLineChart from "components/Main/components/GMLineChart";
import Readout from "components/Main/components/Readout";
import ErrorBoundary from "components/ErrorBoundary";

import SummaryGrid from "./Summary";

const mockStore = configureStore()(mockState);
let SummaryGridWrap;

describe("GO > SummaryGrid component", () => {
  beforeEach(() => {
    SummaryGridWrap = shallow(<SummaryGrid store={mockStore} />);
  });

  test("Matched the snapshot", () => {
    expect(SummaryGridWrap).toMatchSnapshot();
  });

  test("Has an error boundary", () => {
    expect(SummaryGridWrap.dive().find(ErrorBoundary).length).toBe(1);
  });

  test("Has a layout section that contains 'vital' dashboards", () => {
    expect(
      SummaryGridWrap.dive()
        .find(LayoutSection)
        .find({ title: "Vitals" })
    ).toHaveLength(1);
  });

  test("Has a read out group that contains three readout dashboards", () => {
    expect(SummaryGridWrap.dive().find(Readout)).toHaveLength(3);
  });

  test("Has an 'uptime' dashboard in first position", () => {
    expect(
      SummaryGridWrap.dive()
        .find(Readout)
        .at(0)
        .html()
        .includes("Uptime")
    ).toBe(true);
  });

  test("Has an 'average response time' dashboard in second position", () => {
    expect(
      SummaryGridWrap.dive()
        .find(Readout)
        .at(1)
        .html()
        .includes("Avg. Response Time")
    ).toBe(true);
    expect(
      SummaryGridWrap.dive()
        .find(Readout)
        .at(1)
        .html()
        .includes("Error Rate")
    ).toBe(true);
  });

  test("Has a 'host CPU utilized' dashboard in third position", () => {
    expect(
      SummaryGridWrap.dive()
        .find(Readout)
        .at(2)
        .html()
        .includes("Host CPU Utilized")
    ).toBe(true);
  });

  test("Has a chart with correct props passed down", () => {
    expect(SummaryGridWrap.dive().find(GMLineChart).length).toBe(1);
    expect(
      Object.keys(
        SummaryGridWrap.dive()
          .find(GMLineChart)
          .props()
      ).includes("timeSeries")
    ).toBe(true);
    expect(
      SummaryGridWrap.dive()
        .find(GMLineChart)
        .props()
        .timeSeries[1].labels.includes("time")
    ).toBe(true);
  });
});
