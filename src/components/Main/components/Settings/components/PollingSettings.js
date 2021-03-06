import _ from "lodash";
import { PropTypes } from "prop-types";
import React, { Component } from "react";
import InputRange from "react-input-range";

import { COLOR_SUCCESS } from "style/styleVariables";
import Button from "components/Button";
import LayoutSection from "components/LayoutSection";
import PollingBtnContainer from "./components/PollingBtnContainer";
import PollingSliderContainer from "./components/PollingSliderContainer";

/**
 * Control to start/stop polling and change the polling rate
 * Styled to resemble a Readout and intended to be a child of SettingsGrid
 */
class PollingSettings extends Component {
  static propTypes = {
    changePollingInterval: PropTypes.func.isRequired,
    glyph: PropTypes.string.isRequired,
    interval: PropTypes.number.isRequired,
    isPolling: PropTypes.bool.isRequired,
    startPolling: PropTypes.func.isRequired,
    stopPolling: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  };

  // Use local state to have a "loosely" controlled component whereby the slider
  // slides smoothly and changes to Redux are debounced.
  state = {
    localInterval: this.props.interval / 1000,
    debouncedSetInterval: _.debounce(this.props.changePollingInterval, 1000)
  };

  render() {
    const { isPolling, stopPolling, startPolling, title, glyph } = this.props;
    const buttonGlyph = isPolling ? "Pause" : "Play";
    const buttonLabel = isPolling ? "Pause Polling" : "Resume Polling";
    return (
      <LayoutSection title={title} icon={glyph} flex>
        <PollingBtnContainer>
          <Button
            clickAction={() => {
              if (isPolling) {
                stopPolling();
              } else {
                startPolling();
              }
            }}
            glyph={buttonGlyph}
            glyphRatio={3}
            glyphColor={COLOR_SUCCESS.string()}
            label={buttonLabel}
            orientation={"vertical"}
            outline={"raised"}
            size={"xl"}
            tabIndex={0}
            type={"polling"}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              zIndex: 0
            }}
            labelStyle={{
              fontSize: "14px",
              position: "absolute",
              bottom: "10px",
              width: "100%",
              left: "0px"
            }}
          />
        </PollingBtnContainer>

        <PollingSliderContainer id={`ctrl-slider-${title}`}>
          <InputRange
            aria-labelledby="polling interval-name"
            maxValue={120}
            minValue={5}
            onChange={value => {
              this.setState({ localInterval: value });
              this.state.debouncedSetInterval(value * 1000);
            }}
            value={this.state.localInterval}
          />
          <span className="label" id={`interval-name-${title}`}>
            {"Polling Interval (s)"}
          </span>
        </PollingSliderContainer>
      </LayoutSection>
    );
  }
}

export default PollingSettings;
