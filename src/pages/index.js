import React, { Fragment } from "react";
import { Router } from "@reach/router";

import { Header, PageContainer } from "../components";
import Listings from "./listings";
import Spirits from "./spirits";
import Recipes from "./recipes";

export default function Pages() {
  return (
    <Fragment>
      <Header />
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <Listings path="/" />
          <Recipes path="/recipes" />
          <Spirits path="/spirits" />
        </Router>
      </PageContainer>
    </Fragment>
  );
}
