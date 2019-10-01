import React, { Fragment } from "react";
import styled from "react-emotion";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { unit } from "../styles";
import { SpiritDetail } from "../components/spirit-detail";

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

export default function Spirits() {
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
      {data.spirits &&
          data.spirits.map(spirit => <SpiritDetail spirit={spirit} />)}
      </Container>
    </Fragment>
  );
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexGrow: 2,
  justifyContent: "flex-start",
  width: "100%",
  maxWidth: 400,
});
