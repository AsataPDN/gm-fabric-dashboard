import { PropTypes } from "prop-types";
import React from "react";

import GMServiceCardView from "./scene/Card";
import GMServiceListView from "./scene/Table";

import ErrorBoundary from "components/ErrorBoundary";
import { computeStatus } from "utils/selectors";

FabricMainView.propTypes = {
  displayType: PropTypes.string.isRequired,
  groupByAttribute: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
  sortByAttribute: PropTypes.string.isRequired
};

// receive filtered 'services' from FabricGrid
export default function FabricMainView({
  displayType,
  groupByAttribute,
  sortByAttribute,
  services
}) {
  // Do data transformation stuff
  const mappedServices = services.map(service => {
    return {
      authorized: service.authorized,
      headerTitle: computeHeaderTitle(groupByAttribute, service),
      name: service.name,
      version: service.version,
      docsLink: service.documentation,
      status: computeStatus(
        service.instances.length,
        service.minimum,
        service.maximum
      ),
      runtime: service.runtime,
      metered: service.metered,
      instances: service.instances
    };
  });

  if (displayType === "Card") {
    return (
      <ErrorBoundary>
        <GMServiceCardView
          groupByAttribute={undefined}
          sortByAttribute={sortByAttribute}
          services={mappedServices}
        />
      </ErrorBoundary>
    );
  } else if (displayType === "Table") {
    return (
      <ErrorBoundary>
        <GMServiceListView
          groupByAttribute={groupByAttribute}
          sortByAttribute={sortByAttribute}
          services={mappedServices}
        />
      </ErrorBoundary>
    );
  }
}

function computeHeaderTitle(groupByAttribute, service) {
  switch (groupByAttribute) {
    case "Status":
      return computeStatus(
        service.instances.length,
        service.minimum,
        service.maximum
      );
    case "Owner":
      return service.owner || "No Owner Defined";
    case "Capability":
      return service.capability || "No Capability Defined";
    case "None":
    default:
      return "none";
  }
}
