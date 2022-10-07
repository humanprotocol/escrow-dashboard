import { useEffect, useState } from 'react';
import { networkMap } from 'src/constants';
import { RAW_EVENT_DAY_DATA_QUERY } from 'src/queries';
import { gqlFetch } from 'src/utils/gqlFetch';
import { useNetwork } from '../useNetwork';

interface IEventDayData {
  timestamp: string;
  dailyBulkTransferEvents: string;
  dailyIntermediateStorageEvents: string;
  dailyPendingEvents: string;
  dailyEscrowAmounts: string;
}

export default function useEventDayData() {
  const { networkId } = useNetwork();
  const [_eventDayDatas, setBulkTransferEvents] = useState<IEventDayData[]>();

  useEffect(() => {
    const network = networkMap[networkId];
    const fetchData = async (url: string) => {
      const res = await gqlFetch(url, RAW_EVENT_DAY_DATA_QUERY);
      const json = await res.json();
      const {
        data: { eventDayDatas },
      } = json;

      setBulkTransferEvents(eventDayDatas.reverse());
    };
    if (network && network.graphqlClientUrl) {
      fetchData(network.graphqlClientUrl);
    }
  }, [networkId]);

  return _eventDayDatas;
}
