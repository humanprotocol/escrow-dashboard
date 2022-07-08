import * as React from 'react';
import { useQuery } from '@apollo/client';

import { TOKEN_STATS } from 'src/queries';
import { networkMap } from 'src/constants';
import { AppNetworkContext } from 'src/components/App';
import { TokenView } from './TokenView';

interface ITokenContainer {}

export const TokenContainer: React.FC<ITokenContainer> =
  (): React.ReactElement => {
    const { network } = React.useContext(AppNetworkContext);
    let transferEventCount;
    let approvalEventCount;

    const { scanner, hmtAddr } = networkMap[network];
    const { data: queryResponse } = useQuery(TOKEN_STATS);

    if (queryResponse) {
      transferEventCount = Number(
        queryResponse.hmtokenStatistics.transferEventCount
      );
      approvalEventCount = Number(
        queryResponse.hmtokenStatistics.approvalEventCount
      );
    }

    return (
      <TokenView
        address={hmtAddr}
        scanner={scanner}
        transferEventCount={transferEventCount}
        approvalEventCount={approvalEventCount}
      />
    );
  };
