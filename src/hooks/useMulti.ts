import * as React from 'react';
import { useQuery } from '@apollo/client';
import {
  BULK_COUNT,
  ESCROWFACTORIES_COUNT,
  IS_EVENTS_COUNT,
  PEVENTS_COUNT,
} from 'src/queries';

export interface ICounter {
  __typename: string;
  [k: string]: string;
}
export const useMultyQuerries = () => {
  const {
    data: escrowCount,
    loading: escrowCountLoding,
    error: escrowCountError,
  } = useQuery(ESCROWFACTORIES_COUNT);

  const {
    data: bulkCount,
    loading: bulkCountLoding,
    error: bulkCountError,
  } = useQuery(BULK_COUNT);

  const {
    data: isEventsCount,
    loading: isEventsCountLoding,
    error: isEventsCountError,
  } = useQuery(IS_EVENTS_COUNT);

  const {
    data: peventsCount,
    loading: peventsCountLoading,
    error: peventsCountError,
  } = useQuery(PEVENTS_COUNT);

  const isLoading: boolean =
    bulkCountLoding ||
    isEventsCountLoding ||
    peventsCountLoading ||
    escrowCountLoding;

  const isError: boolean = Boolean(
    bulkCountError ||
      isEventsCountError ||
      peventsCountError ||
      escrowCountError
  );

  React.useEffect(() => {
    if (!isLoading && !isError) {
      const key = Object.keys(bulkCount)[0];
      const data = bulkCount[key];

      const countsOfBulk = data.reduce((prev: number, curr: ICounter) => {
        const dataKey = Object.keys(curr)[0];
        // console.log(curr);
        return prev + Number(curr[dataKey]);
      }, 0);
      console.log(countsOfBulk);
    }
  }, [isLoading, isError]);

  console.log(bulkCount, escrowCount, peventsCount, isEventsCount);
  return {
    bulkCount,
    escrowCount,
    peventsCount,
    isEventsCount,
    isLoading,
    isError,
  };
};
