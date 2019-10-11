import React, { Fragment } from "react";
import { Router } from "@reach/router";

import { Header, PageContainer } from "../components";
import Listings from "./listings";
import Spirits from "./spirits";
import Spirit from "./spirit";
import Recipes from "./recipes";
import Recipe from "./recipe";

export default function Pages() {
  return (
    <Fragment>
      <Header />
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <Listings path="/" />
          <Recipes path="/recipes" />
          <Recipe path="/recipe/:recipeId" />
          <Spirits path="/spirits" />
          <Spirit path="/spirit/:spiritId" />
        </Router>
      </PageContainer>
    </Fragment>
  );
}
