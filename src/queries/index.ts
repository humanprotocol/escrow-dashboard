import { ApolloClient, InMemoryCache } from "@apollo/client";
import gql from "graphql-tag";

export const getClient = (graphqlClientUrl: string) => {
  return new ApolloClient({
    uri: graphqlClientUrl,
    credentials: "",
    cache: new InMemoryCache(),
  });
};

export const ESCROWFACTORIES_COUNT = gql`
  query GetEscrowFactoriesCount {
    escrowFactories {
      count
    }
  }
`;

export const ESCROWFACTORY_COUNT = gql`
  query GetEscrowFactoryCount($id: ID!) {
    escrowFactory(id: $id) {
      count
    }
  }
`;
