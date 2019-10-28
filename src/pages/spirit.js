import React, { Fragment } from "react";
import styled from "react-emotion";

import { useQuery } from "@apollo/react-hooks";

import { PageTitle } from "../components/page-title";
import { SpiritDetail, SpiritForm } from "../components/spirit-detail";

import { GetSpiritQuery } from "../schema";

export default function Spirits({ spiritId }) {
  const { data, loading, errors } = useQuery(GetSpiritQuery, {
    variables: { spiritId }
  });

  if (loading) return <div>...loading...</div>;
  if (errors) return <p>ERROR: {errors}</p>;

  return (
    <Fragment>
      <PageTitle>Spirits</PageTitle>
      <Container>
        {data && data.spirit ? (
          <SpiritDetail key={data.spirit.key} spirit={data.spirit} />
        ) : (
          <div>Spirit not found with id: {spiritId}</div>
        )}
        <SpiritForm {...data.spirit} />
      </Container>
    </Fragment>
  );
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexGrow: 2,
  justifyContent: "flex-start",
  width: "100%",
  maxWidth: 400
});
