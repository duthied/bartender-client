import React, { Fragment } from "react";
import styled from "react-emotion";

import { useQuery } from "@apollo/react-hooks";

import { PageTitle } from "../components/page-title";
import { SpiritDetail } from "../components/spirit-detail";

import { GetSpiritQuery } from "../schema";

export default function Spirits({ spiritId }) {
  const { data, errors } = useQuery(
    GetSpiritQuery,
    { variables: { spiritId } }
    );
  if (errors)
    errors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  return (
    <Fragment>
      <PageTitle>Spirits</PageTitle>
      <Container>
        <SpiritDetail key={data.spirit.key} spirit={data.spirit} />)}
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
  maxWidth: 400
});
