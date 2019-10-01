import React from "react";
import ReactDOM from "react-dom";

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Pages from "./pages";
import injectStyles from "./styles";

const cache = new InMemoryCache();

const resolvers = {};
const typeDefs = gql`
  enum SpiritType {
    GIN
    VODKA
    RUM
    LIQUOR
    TEQUILA
    BOURBON
  }

  type Spirit {
    id: ID!
    name: String!
    type: SpiritType!
    howMuchLeft: String
  }
`;

const client = new ApolloClient({
    cache: cache,
    link: new HttpLink({
      uri: 'http://localhost:4000/'
    }),
    resolvers,
    typeDefs,
  });

injectStyles();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />  
  </ApolloProvider>,
  document.getElementById("root")
);
