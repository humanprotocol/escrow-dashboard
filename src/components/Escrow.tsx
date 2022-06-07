import { useContext, useEffect, useState } from "react";
import { AbiItem } from 'web3-utils'

import getWeb3 from '../web3';
import EscrowFactoryView from './EscrowFactoryView';
import EscrowFactoryABI from '../contracts/EscrowFactoryABI.json';
import { ESCROWFACTORIES_COUNT, ESCROWFACTORY_COUNT } from '../queries';
import AppContext from '../AppNetworkContext';
import { networkMap } from '../constants';
import { countEscrowFactory } from '../utils';

interface Props {
  escrowFactory: string
}
export default function EscrowContainer({ escrowFactory }: Props) {
  const [latestEscrow, setLatestEscrow] = useState("");
  const { network } = useContext(AppContext);

  const { scanner } = networkMap[network];
  const address = networkMap[network].defaultFactoryAddr || escrowFactory;
  const { rpcUrl } = networkMap[network];

  const eventsUrl = `${scanner}/address/${address}#events`;
  const { data } = useQuery(ESCROWFACTORIES_COUNT);

  const { data: dataFactory } = useQuery(ESCROWFACTORY_COUNT, {
    variables: { id: escrowFactory },
    skip: !escrowFactory,
  });

  useEffect(() => {
    async function setupEscrow() {
      try {
        const web3 = getWeb3(rpcUrl);
        const EscrowFactory = new web3.eth.Contract(EscrowFactoryABI as AbiItem[], address);
        const lastEscrow = await EscrowFactory.methods.lastEscrow().call();
        setLatestEscrow(lastEscrow);
      } catch (err) {
        console.error(err);
        alert('Invalid escrow factory');
      }
    }
    setupEscrow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return (
    <EscrowFactoryView
      count={countEscrowFactory(
        dataFactory?.escrowFactory
          ? [dataFactory.escrowFactory]
          : data?.escrowFactories
      )}
      address={address}
      latestEscrow={latestEscrow}
      eventsUrl={eventsUrl}
      scanner={scanner}
    />
  );
}
