import { PropTypes } from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import FabricSidebarContentSection from "./FabricSidebarContentSection";
import TriangleDown from "../library/TriangleDown";

import { getSideBarContent } from "../../utils/selectors";
import {
  COLOR_SIDEBAR_BACKGROUND,
  BORDER_RADIUS_BASE,
  FONT_SIZE_BASE,
  FONT_SIZE_SM,
  COLOR_HIGHLIGHT
} from "../../style/styleVariables";
import { contrastColor, spacingScale } from "../../style/styleFunctions";
import { microserviceStatuses } from "../../utils/constants";

import Collapse from "react-collapse";

import styled from "styled-components";
import ServicesIcon from "../../images/icons/servicesWhite.svg";

// styled components

const Services = styled.div`
  margin: 2px;
  padding: ${spacingScale(0.75)} 0 ${spacingScale(0.5)};
  min-height: ${spacingScale(4.25)};
  background-color: ${contrastColor(COLOR_SIDEBAR_BACKGROUND, 0.71).string()};
  border-radius: ${BORDER_RADIUS_BASE};
`;

const ServicesActive = Services.extend`
  box-shadow: -1px 0 0 0 ${COLOR_HIGHLIGHT.hsl().string()};
`;

export const Header = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${FONT_SIZE_BASE};
`;

export const HeaderLeft = styled.span`min-width: 75%;`;

export const HeaderRight = styled.span`
  text-align: right;
  margin: 0 ${spacingScale(1)} 0 0;
  justify-content: flex-end;
  font-size: ${FONT_SIZE_SM};
  opacity: 0.8;
`;

const Section = styled.div`margin: ${spacingScale(1)} 0 0;`;

const HeaderIcon = styled.span`margin: 0 ${spacingScale(1)};`;

class FabricSidebarContent extends Component {
  state = {
    isOpen: true
  };

  toggleStack = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { services } = this.props;
    return (
      <ServicesActive>
        <Header onClick={this.toggleStack}>
          <HeaderLeft>
            <HeaderIcon>
              <img src={ServicesIcon} alt="" />
            </HeaderIcon>
            Services
          </HeaderLeft>
          <HeaderRight>
            <TriangleDown fill="white" stroke="white" />
          </HeaderRight>
        </Header>
        <Collapse
          isOpened={this.state.isOpen}
          hasNestedCollapse={true}
          onClick={evt => {
            evt.stopPropagation();
          }}
        >
          {microserviceStatuses.map(status => (
            <Section key={status}>
              <FabricSidebarContentSection
                status={status}
                services={services.filter(service => {
                  return service.status.toLowerCase() === status.toLowerCase();
                })}
              />
            </Section>
          ))}
        </Collapse>
      </ServicesActive>
    );
  }
}

function mapStateToProps(state) {
  return {
    services: getSideBarContent(state)
  };
}

export default withRouter(connect(mapStateToProps)(FabricSidebarContent));

FabricSidebarContent.propTypes = {
  services: PropTypes.array
};