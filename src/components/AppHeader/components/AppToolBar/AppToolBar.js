import { PropTypes } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import decipherLogo from "components/AppHeader/assets/decipherLogo.svg";
import NavButton from "components/NavButton";
import ButtonGroup from "components/ButtonGroup";
import { decodeParameter } from "utils";
import { AppVersion } from "utils/constants";

import AppToolBarHeader from "./components/AppToolBarHeader";
import BrandContainer from "./components/BrandContainer";
import BrandLogo from "./components/BrandLogo";
import BrandText from "./components/BrandText";
import AppVersionLink from "./components/AppVersionLink";
import SkipNav from "./components/SkipNav";
import Breadcrumbs from "./components/Breadcrumbs";
import Breadcrumb from "./components/Breadcrumb";

AppToolBar.propTypes = {
  appVersion: PropTypes.string,
  hideRoot: PropTypes.bool,
  pathname: PropTypes.string.isRequired,
  toolbarButtons: PropTypes.array
};

const defaultToolbarButtons = [
  {
    path: "/settings",
    icon: "cog",
    label: "Settings",
    outline: "none"
  }
];
/**
 * Stateless functional React component that renders the bar at top of main content with breadcrumbs represending client routing and a link to settings
 * @param {Object} props - See propTypes
 * @returns JSX.Element
 */
function AppToolBar({
  pathname,
  hideRoot,
  appVersion = AppVersion,
  toolbarButtons = defaultToolbarButtons
}) {
  return (
    <AppToolBarHeader>
      <SkipNav type="button" skipToId="main-content">
        Skip Navigation
      </SkipNav>
      <BrandContainer>
        <BrandLogo alt="" src={decipherLogo} />
        <BrandText>
          <Link
            to={{
              pathname: "/",
              search: ""
            }}
          >
            Fabric
          </Link>
        </BrandText>
      </BrandContainer>

      <Breadcrumbs hideRoot>
        <Breadcrumb>
          <Link to="/">fabric</Link>
        </Breadcrumb>
        {//strip out leading slashes to get route as array
        pathname
          .replace(/^\/|\/$/g, "")
          .replace("%2F", "/") // String out escaped slashes if found
          .split("/")
          .map((val, idx) => {
            // Primarily we want to decode service names which are always at index 0.
            // A side effect is that we also decode other breadcrumbs at the same index
            // but we control those i.e. not something generated by customer data. As such,
            // there's no negative impact to decoding them.
            const prettyVal = idx === 0 ? decodeParameter(val) : val;
            // Only render BC if val is truthy (aka don't render a BC if we are on the root)
            return val ? (
              <Breadcrumb key={`${val}|${idx}`}>
                <Link to={`${pathname.substr(0, pathname.indexOf(val))}${val}`}>
                  {prettyVal.length < 30
                    ? prettyVal
                    : `${prettyVal.substr(0, 30)}...`}
                </Link>
              </Breadcrumb>
            ) : null;
          })}
      </Breadcrumbs>

      <AppVersionLink
        href="https://github.com/DecipherNow/gm-fabric-dashboard/blob/master/CHANGELOG.md"
        rel="noopener noreferrer"
        target="_blank"
      >
        {AppVersion}
      </AppVersionLink>
      <ButtonGroup toolbar>
        {toolbarButtons.map(button => (
          <NavButton
            active={pathname === "/settings" ? true : false}
            key={button.path}
            hideLabel
            icon={button.icon}
            label={button.label}
            outline={"none"}
            to={button.path}
          />
        ))}
      </ButtonGroup>
    </AppToolBarHeader>
  );
}

export default AppToolBar;
