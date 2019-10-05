import React, { Fragment } from "react";
import styled from "react-emotion";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { PageTitle } from "../components/page-title";
import { RecipeDetail } from "../components/recipe-detail";
import { RecipeItemSchema } from "../schema";

export const GET_RECIPES = gql`
  query getRecipeList {
    recipes {
      ...RecipeItem
    }
  }
  ${RecipeItemSchema}
`;

export default function Recipes() {
  const { data, errors } = useQuery(GET_RECIPES);
  if (errors)
    errors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  return (
    <Fragment>
      <PageTitle>Recipes</PageTitle>
      <Container>
        {data.recipes &&
          data.recipes.map(recipe => <RecipeDetail recipe={recipe} />)}
      </Container>
    </Fragment>
  );
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexGrow: 2,
  width: "100%",
  maxWidth: 400
});
