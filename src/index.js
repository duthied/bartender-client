import React from "react";
import ReactDOM from "react-dom";

import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";

import Pages from "./pages";
import injectStyles from "./styles";

const cache = new InMemoryCache();

const resolvers = {};

const client = new ApolloClient({
  cache: cache,
  link: new HttpLink({
    uri: "http://localhost:4000/"
  }),
  resolvers
});

injectStyles();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
