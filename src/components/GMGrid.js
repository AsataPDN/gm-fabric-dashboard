import _ from "lodash";
import { Actions } from "jumpstate";
import { PropTypes } from "prop-types";
import React, { Component } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { connect } from "react-redux";

import GMBasicMetrics from "./GMBasicMetrics";
import GMLineChart from "./GMLineChart";
import GMTable from "./GMTable";
import {
  getDygraphOfValue,
  mapDygraphKeysToNetChange
} from "../utils/dygraphs";
import { getLatestAttribute, parseJSONString } from "../utils/latestAttribute";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * Reuseable component for rendering a grid
 *
 * Pulls the dashboard matching URL param from Redux and renders it.
 */
class GMGrid extends Component {
  static propTypes = {
    dashboards: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    metrics: PropTypes.object.isRequired,
    name: PropTypes.string
  };

  state = {
    name: ""
  };

  componentWillMount() {
    this.setName(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.setName(nextProps);
  }

  setName(props) {
    const nameInURL =
      _.hasIn(props, ["match", "params", "dashboardName"]) &&
      props.match.params.dashboardName.replace("%2F", "/").toLowerCase();
    if (nameInURL !== this.state.name) this.setState({ name: nameInURL });
  }

  getDashboard() {
    const selectedDashboardName =
      _.hasIn(this.props, ["match", "params", "dashboardName"]) &&
      this.props.match.params.dashboardName.replace("%2F", "/").toLowerCase();
    return [
      selectedDashboardName,
      this.props.dashboards[selectedDashboardName]
    ]; // This should be case insensitive at all times
  }

  render() {
    const { metrics } = this.props;
    const dashboard = this.state.name
      ? this.props.dashboards[this.state.name]
      : undefined;

    if (!dashboard)
      return <div>{`Dashboard ${this.state.name} does not exist`}</div>;
    return (
      <div>
        <ResponsiveReactGridLayout
          breakpoints={dashboard.grid.breakpoints}
          cols={dashboard.grid.cols}
          isDraggable={false}
          isResizable={false}
          layouts={dashboard.grid.layouts}
          onLayoutChange={(currentLayout, allLayouts) => {
            const dashboardState = {};
            _.set(
              dashboardState,
              [this.state.name, "grid", "layouts"],
              allLayouts
            );
            Actions.setDashboard(dashboardState);
          }}
          rowHeight={dashboard.grid.rowHeight}
        >
          {dashboard.charts.map(chart => {
            return (
              <div
                data-grid={chart.position}
                key={chart.title}
                style={{
                  overflow: "hidden"
                }}
              >
                {chart.type === "GMLineChart" &&
                  <GMLineChart
                    detailLines={
                      chart.data.detailLines &&
                      chart.data.detailLines.map(line =>
                        parseJSONString(line, metrics)
                      )
                    }
                    expectedAttributes={chart.data.timeseries.map(
                      ts => ts.attribute
                    )}
                    timeSeries={mapDygraphKeysToNetChange(
                      getDygraphOfValue(
                        metrics,
                        chart.data.timeseries.map(ts => ts.attribute),
                        chart.data.timeseries.map(ts => ts.label)
                      ),
                      chart.data.timeseries
                        .filter(ts => ts.type === "netChange")
                        .map(ts => ts.label)
                    )}
                    title={chart.title}
                  />}
                {chart.type === "GMTable" &&
                  <GMTable
                    headers={chart.data.headers}
                    rows={chart.data.rows.map((row, outerIdx) => {
                      return row.map((cell, innerIdx) => {
                        return innerIdx > 0
                          ? getLatestAttribute(metrics, cell)
                          : cell;
                      });
                    })}
                    title={chart.title}
                  />}
                {chart.type === "GMBasicMetrics" &&
                  <GMBasicMetrics
                    detailLines={chart.data.detailLines.map(
                      ([heading, key]) => [
                        heading,
                        getLatestAttribute(metrics, key)
                      ]
                    )}
                    title={chart.title}
                  />}
              </div>
            );
          })}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

function mapStateToProps({ dashboards, metrics }) {
  return { dashboards, metrics };
}

export default connect(mapStateToProps)(GMGrid);
