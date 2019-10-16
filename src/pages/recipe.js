import React, { Fragment } from "react";
import styled from "react-emotion";

import { useQuery } from "@apollo/react-hooks";

import { PageTitle } from "../components/page-title";
import { RecipeDetail } from "../components/recipe-detail";

import { GetRecipeQuery } from "../schema";

export default function Recipe({ recipeId }) {
  const { data, loading, errors } = useQuery(GetRecipeQuery, {
    variables: { recipeId }
  });

  if (loading) return <div>...loading...</div>;
  if (errors) return <p>ERROR: {errors}</p>;

  return (
    <Fragment>
      <PageTitle>Recipes</PageTitle>
      <Container>
        {data.recipe !== null ? (
          <RecipeDetail key={data.recipe.id} recipe={data.recipe} />
        ) : (
          <div>Recipe not found with id: {recipeId}</div>
        )}
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
