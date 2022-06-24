import { ApolloClient, InMemoryCache } from '@apollo/client';
import gql from 'graphql-tag';

export const getClient = (graphqlClientUrl: string) => {
  return new ApolloClient({
    uri: graphqlClientUrl,
    credentials: '',
    cache: new InMemoryCache(),
  });
};

export const LAUNCHED_ESCROWS = gql`
  query GetLaunchedEscrows {
    launchedEscrows {
      id
      eip20
    }
  }
`;

export const LAUNCHED_ESCROW = gql`
  query GetLaunchedEscrow($id: ID!) {
    launchedEscrow(id: $id) {
      eip20
    }
  }
`;
