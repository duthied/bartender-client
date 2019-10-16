import React, { Fragment } from "react";
import styled from "react-emotion";

import { useQuery } from "@apollo/react-hooks";

import { PageTitle } from "../components/page-title";
import { RecipeDetail } from "../components/recipe-detail";
import { GetRecipesQuery } from "../schema";

export default function Recipes() {
  const { data, loading, errors } = useQuery(GetRecipesQuery);
  if (loading) return <div>...loading...</div>;
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
          data.recipes.map(recipe => (
            <RecipeDetail key={recipe.id} recipe={recipe} />
          ))}
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
