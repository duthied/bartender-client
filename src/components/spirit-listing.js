import React, { Fragment } from "react";
import styled from "react-emotion";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import ListingTitle from "./listing-title";
import { SpiritDetail } from "./spirit-detail";

const listingTitle = "Spirits";
const listingTarget = "spirits";

export const SPIRIT_DATA = gql`
  fragment SpiritItem on Spirit {
    __typename
    id
    name
    type
    howMuchLeft
  }
`;

export const GET_SPIRITS = gql`
  query GetSpiritList {
    spirits {
      ...SpiritItem
    }
  }
  ${SPIRIT_DATA}
`;

export default function SpiritListing() {
  const { data, errors } = useQuery(GET_SPIRITS);
  if (errors)
    errors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  return (
    <Fragment>
      <Container>
        <ListingTitle to={listingTarget} title={listingTitle} />
        {data.spirits &&
          data.spirits.map(spirit => (
            <SpiritDetail key={spirit.id} spirit={spirit} />
          ))}
      </Container>
    </Fragment>
  );
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  // alignItems: "flex-start",
  // justifyContent: "flex-start",
  // alignItems: "flex-start",
  width: "100%"
});
