import { useEffect, useState } from 'react';
import { getWeb3 } from 'src/helpers';
import { useNetwork } from '../useNetwork';

const EscrowFactoryABI = require('src/contracts/EscrowFactoryABI.json');

export default function useEscrowCounter() {
  const { network } = useNetwork();
  const [escrowQty, setEscrowQty] = useState<number>();

  useEffect(() => {
    const fetchData = async (rpcUrl: string) => {
      const web3 = getWeb3(rpcUrl);
      const EscrowFactory = new web3.eth.Contract(
        EscrowFactoryABI,
        network.defaultFactoryAddr
      );
      const escrowAmount = await EscrowFactory.methods.counter().call();
      setEscrowQty(Number(escrowAmount));
    };
    if (network && network.rpcUrl) {
      fetchData(network.rpcUrl);
    }
  }, [network]);

  return escrowQty;
}
