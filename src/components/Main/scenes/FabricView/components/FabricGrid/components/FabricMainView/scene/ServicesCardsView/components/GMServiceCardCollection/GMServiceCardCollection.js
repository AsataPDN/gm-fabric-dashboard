import React from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import GMServiceCard from "./components/GMServiceCard";

GMServiceCardCollection.propTypes = {
  items: PropTypes.array.isRequired
};

const ContentItems = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-basis: 100%;
`;

/**
 * Render section(s) with grouping header and group of cards
 *
 */

export default function GMServiceCardCollection({ items }) {
  return (
    <ContentItems>
      {items.map(item => (
        <GMServiceCard
          authorized={item.authorized}
          key={`${item.name}|${item.version}`}
          name={item.name}
          version={item.version}
          docsLink={item.docsLink}
          status={item.status}
          metered={item.metered}
          runtime={item.runtime}
        />
      ))}
    </ContentItems>
  );
}
