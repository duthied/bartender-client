import React, { Fragment } from "react";
import styled from "react-emotion";

import { useQuery } from "@apollo/react-hooks";

import ListingTitle from "./listing-title";
import { RecipeDetail } from "./recipe-detail";
import { GetRecipesQuery } from "../schema";

const listingTitle = "Recipes";
const listingTarget = "recipes";

export default function RecipeListing() {
  const { data, errors } = useQuery(GetRecipesQuery);
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
        {data.recipes &&
          data.recipes.map(recipe => (
            <RecipeDetail key={recipe.id} recipe={recipe} />
          ))}
      </Container>
    </Fragment>
  );
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%"
});
