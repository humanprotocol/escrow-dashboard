import { ApolloClient, InMemoryCache } from '@apollo/client';
import gql from 'graphql-tag';

export const getClient = (graphqlClientUrl: string) => {
  return new ApolloClient({
    uri: graphqlClientUrl,
    credentials: '',
    cache: new InMemoryCache(),
  });
};

export const ESCROW_STATS = gql`
  query GetEscrowStatistics {
    escrowStatistics(id: "escrow-statistics-id") {
      intermediateStorageEventCount
      pendingEventCount
      bulkTransferEventCount
    }
  }
`;

export const TOKEN_STATS = gql`
  query GetHmtStatistics {
    hmtokenStatistics(id: "hmt-statistics-1") {
      transferEventCount
      bulkTransferEventCount
      approvalEventCount
      bulkApprovalEventCount
      token
    }
  }
`;
