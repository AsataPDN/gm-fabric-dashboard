import filesize from "filesize";
import { Actions } from "jumpstate";
import objectSizeOf from "object-sizeof";
import { PropTypes } from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";

import PollingSettings from "./components/PollingSettings";

import Button from "components/Button";
import LayoutSection from "components/LayoutSection";
import ErrorBoundary from "components/ErrorBoundary";
import ConfirmationModal from "components/ConfirmationModal";

import Card from "components/Main/components/Card";

import { FONT_SIZE_HERO, FONT_SIZE_BASE } from "style/styleVariables";
import { spacingScale } from "style/styleFunctions";

import "react-input-range/lib/css/index.css";

/**
 * Settings Page containing controls for things like polling rate, local storage, etc.
 * @param {Object} props - See proptypes for details
 */
class SettingsGrid extends Component {
  static propTypes = {
    fabricPollingInterval: PropTypes.number,
    fabricServer: PropTypes.string,
    instanceMetricsPollingInterval: PropTypes.number,
    isPollingFabric: PropTypes.bool,
    isPollingInstanceMetrics: PropTypes.bool,
    metricsCacheSize: PropTypes.string
  };

  state = {
    isClearCacheModelOpen: false
  };
  clearCacheClickAction = () => {
    this.setState({ isClearCacheModelOpen: true });
  };

  render() {
    const {
      fabricPollingInterval,
      fabricServer,
      isPollingFabric,
      isPollingInstanceMetrics,
      metricsCacheSize,
      instanceMetricsPollingInterval
    } = this.props;
    const button = (
      <Button
        clickAction={this.clearCacheClickAction}
        glyph="Close"
        label="Clear Cache"
        tabIndex={0}
      />
    );
    return (
      <div>
        <ConfirmationModal
          isOpen={this.state.isClearCacheModelOpen}
          onCancel={() => this.setState({ isClearCacheModelOpen: false })}
          onConfirm={() => {
            Actions.clearMetrics();
            this.setState({ isClearCacheModelOpen: false });
          }}
          question="Are you sure that you want to clear the cached metrics data?"
          secondary="This action cannot be undone."
        />
        <ErrorBoundary>
          {fabricServer && (
            <PollingSettings
              changePollingInterval={
                Actions.changeFabricMicroservicesPollingInterval
              }
              stopPolling={Actions.stopPollingFabricMicroservices}
              startPolling={Actions.startPollingFabricMicroservices}
              interval={fabricPollingInterval}
              isPolling={isPollingFabric}
              glyph="Fabric"
              title="Fabric Polling"
            />
          )}
          <PollingSettings
            changePollingInterval={Actions.changeInstanceMetricsPollingInterval}
            stopPolling={Actions.stopPollingInstanceMetrics}
            startPolling={Actions.startPollingInstanceMetrics}
            interval={instanceMetricsPollingInterval}
            isPolling={isPollingInstanceMetrics}
            glyph="ServiceInstance"
            title={fabricServer ? "Instance Polling" : "Polling"}
          />
          <LayoutSection icon={"Tape"} title={"Metrics Cache"} flex>
            <Card
              title={"Cache Size"}
              value={metricsCacheSize}
              children={button}
              bodyStyle={{
                fontSize: FONT_SIZE_HERO,
                order: 1,
                fontWeight: 500
              }}
              cardContainerStyle={{ width: "230px", height: "160px" }}
              childrenStyle={{
                fontSize: FONT_SIZE_HERO,
                order: 3
              }}
              mainStyle={{
                justifyContent: "flex-end",
                flexGrow: 1
              }}
              sectionStyle={{
                paddingTop: spacingScale(2.5)
              }}
              titleStyle={{
                fontSize: FONT_SIZE_BASE,
                order: 2,
                fontWeight: "normal"
              }}
            />
          </LayoutSection>
        </ErrorBoundary>
      </div>
    );
  }
}

function mapStateToProps({
  settings: { fabricServer },
  dashboards,
  fabric: { fabricPollingInterval, isPollingFabric },
  instance: {
    metrics,
    instanceMetricsPollingInterval,
    isPollingInstanceMetrics
  }
}) {
  return {
    fabricPollingInterval,
    fabricServer,
    instanceMetricsPollingInterval,
    isPollingFabric,
    isPollingInstanceMetrics,
    metricsCacheSize: filesize(objectSizeOf(metrics))
  };
}

export default connect(mapStateToProps)(SettingsGrid);
