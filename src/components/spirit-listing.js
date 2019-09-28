import React, { Fragment } from 'react';
import styled from 'react-emotion';
import { unit, colors } from '../styles';

const sectionTitle = 'Spirits';

export default function SpiritListing() {
  return (
    <Fragment>
      <Container>
        <SectionTitle>{sectionTitle}</SectionTitle>
      </Container>
    </Fragment>
  );
}

const SectionTitle = styled("h2") ({
  textTransform: "uppercase"
});

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  width: "100%",
  maxWidth: 400,
  margin: "0 auto",
  padding: unit * 3,
  paddingBottom: unit * 5,
  marginBottom: unit * 2,
  backgroundColor: colors.secondary
});