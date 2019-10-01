import React, { Fragment } from "react";
import styled from "react-emotion";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import ListingTitle from "./listing-title";
import { RecipeDetail } from "./recipe-detail";

const listingTitle = "Recipes";
const listingTarget = "recipes";

export const RECIPE_DATA = gql`
  fragment RecipeItem on Recipe {
    __typename
    id
    name
    glass
    ingredients {
      spirit {
        name
      }
    }
  }
`;

export const GET_RECIPES = gql`
  query getRecipeList {
    recipes {
      ...RecipeItem
    }
  }
  ${RECIPE_DATA}
`;

export default function RecipeListing() {
  const { data, errors } = useQuery(GET_RECIPES);
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
            <RecipeDetail  key={recipe.id} recipe={recipe} />
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
